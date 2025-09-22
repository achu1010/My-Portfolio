import { useState, useEffect, useRef } from 'react';
import DarkBackground from '@/components/DarkBackground';

interface Position {
  x: number;
  y: number;
  rotation: number;
}

interface SkillCloudProps {
  name: string;
  rating: number;
  index: number;
  isSpread: boolean;
  fixedPosition: Position;
  onDragEnd: (index: number, newPosition: Position) => void;
  isDraggable: boolean;
}

function SkillCloud({ name, rating, index, isSpread, fixedPosition, onDragEnd, isDraggable }: SkillCloudProps) {
  // Calculate size based on rating (1-10)
  const minSize = 80;
  const maxSize = 180;
  const size = minSize + ((maxSize - minSize) * (rating / 10));
  
  // Position values
  const [position, setPosition] = useState({ x: 10, y: 10, rotation: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const cloudRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Get reference to the container div
  useEffect(() => {
    containerRef.current = document.querySelector('.skills-container');
  }, []);
  
  useEffect(() => {
    if (isSpread) {
      // Use the pre-calculated position when spread
      setPosition(fixedPosition);
    } else {
      // Stack at top left when not spread, with a slight offset based on index
      setPosition({ 
        x: 5, 
        y: 5, 
        rotation: 0 
      });
    }
  }, [isSpread, fixedPosition, index]);
  
  // Mouse event handlers for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDraggable || !isSpread) return;
    
    e.preventDefault();
    setIsDragging(true);
    
    // Calculate the offset from the mouse position to the element's top-left corner
    const rect = cloudRef.current?.getBoundingClientRect();
    if (rect) {
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      setDragOffset({ x: offsetX, y: offsetY });
    }
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !cloudRef.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const cloudRect = cloudRef.current.getBoundingClientRect();
    
    // Calculate new position in percentage
    const newX = ((e.clientX - dragOffset.x - containerRect.left) / containerRect.width) * 100;
    const newY = ((e.clientY - dragOffset.y - containerRect.top) / containerRect.height) * 100;
    
    // Ensure the skill stays within the container bounds (with some margin)
    const boundedX = Math.min(Math.max(1, newX), 99 - (cloudRect.width / containerRect.width) * 100);
    const boundedY = Math.min(Math.max(1, newY), 99 - (cloudRect.height / containerRect.height) * 100);
    
    setPosition(prev => ({ ...prev, x: boundedX, y: boundedY }));
  };
  
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      // Notify parent component about the new position
      onDragEnd(index, { ...position, rotation: position.rotation });
    }
  };
  
  // Add and remove global event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  return (
    <div 
      ref={cloudRef}
      className={`absolute bg-gray-800/90 rounded-full flex items-center justify-center p-4 shadow-lg transform hover:shadow-xl border border-blue-500/30 ${isDraggable && isSpread ? 'cursor-move' : ''} ${isDragging ? 'scale-105 z-50 shadow-2xl' : 'hover:scale-110'}`}
      style={{ 
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${position.rotation}deg)`,
        zIndex: isDragging ? 50 : (isSpread ? Math.floor(rating) : (100 - index)),
        transition: isDragging ? 'none' : `all ${1.5 + (index * 0.1)}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
        opacity: isSpread ? 1 : 0.8,
        boxShadow: isDragging ? '0 15px 30px rgba(59, 130, 246, 0.4)' : (isSpread ? '0 10px 25px rgba(59, 130, 246, 0.3)' : '0 5px 15px rgba(59, 130, 246, 0.2)'),
        animation: isSpread ? 'borderGlow 3s infinite' : 'none',
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="text-center">
        <div className="font-medium text-blue-300" style={{ fontSize: `${Math.max(14, rating * 1.5)}px` }}>
          {name}
        </div>
        <div className="text-blue-400 font-bold mt-1">{rating}/10</div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [isSpread, setIsSpread] = useState(false);
  
  // Define base skill data
  const skillsData = [
    { name: "Python", rating: 9 },
    { name: "Java", rating: 8 },
    { name: "C/C++", rating: 7 },
    { name: "HTML/CSS", rating: 9 },
    { name: "JavaScript", rating: 8 },
    { name: "SQL", rating: 8 },
    { name: "Data Structures", rating: 8 },
    { name: "Algorithms", rating: 8 },
    { name: "Problem Solving", rating: 9 },
    { name: "Critical Thinking", rating: 8 },
    { name: "Web API", rating: 7 },
    { name: "TypeScript", rating: 7 },
    { name: "React", rating: 7 },
    { name: "Next.js", rating: 6 },
    { name: "Bubble.io", rating: 7 },
    { name: "Git", rating: 8 }
  ];
  
  // Sort skills by rating (higher ratings first)
  const sortedSkills = [...skillsData].sort((a, b) => b.rating - a.rating);
  
  // Pre-calculate non-overlapping positions for each skill
  const [skillsWithPositions, setSkillsWithPositions] = useState<Omit<SkillCloudProps, 'onDragEnd' | 'isDraggable'>[]>([]);
  
  useEffect(() => {
    // Generate non-overlapping positions for each skill
    const generateNonOverlappingPositions = () => {
      const positions: Omit<SkillCloudProps, 'onDragEnd' | 'isDraggable'>[] = [];
      const usedPositions: { x: number, y: number, size: number }[] = [];
      
      // Create a grid system for more even distribution
      const containerWidth = 90; // Use 90% of container width (leave 5% padding on each side)
      const containerHeight = 85; // Use 85% of container height (leave padding)
      
      // Calculate how many skills can fit in each row/column based on average skill size
      const avgSkillSize = sortedSkills.reduce((sum, skill) => {
        const minSize = 80;
        const maxSize = 180;
        return sum + (minSize + ((maxSize - minSize) * (skill.rating / 10)));
      }, 0) / sortedSkills.length;
      
      const gridSpacing = avgSkillSize / 6; // Convert to percentage and add some spacing
      const gridCols = Math.ceil(Math.sqrt(sortedSkills.length * containerWidth / containerHeight));
      const gridRows = Math.ceil(sortedSkills.length / gridCols);
      
      // Create grid cells with slight randomization
      const grid: {x: number, y: number}[] = [];
      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          // Calculate base position with padding
          const baseX = 5 + (containerWidth / gridCols) * col + (containerWidth / gridCols / 2);
          const baseY = 5 + (containerHeight / gridRows) * row + (containerHeight / gridRows / 2);
          
          // Add slight randomization (±10% of cell size)
          const randX = baseX + (Math.random() * 0.2 - 0.1) * (containerWidth / gridCols);
          const randY = baseY + (Math.random() * 0.2 - 0.1) * (containerHeight / gridRows);
          
          grid.push({x: randX, y: randY});
        }
      }
      
      // Shuffle the grid positions to avoid rating patterns
      const shuffledGrid = [...grid].sort(() => Math.random() - 0.5);
      
      // Assign positions to skills
      sortedSkills.forEach((skill, index) => {
        // Calculate size
        const minSize = 80;
        const maxSize = 180;
        const size = minSize + ((maxSize - minSize) * (skill.rating / 10));
        
        // Get grid position (or random if we run out of grid positions)
        const pos = index < shuffledGrid.length ? 
          shuffledGrid[index] : 
          { x: 5 + Math.random() * 85, y: 5 + Math.random() * 80 };
        
        // Random small rotation
        const rotation = Math.floor(Math.random() * 8) - 4; // -4 to 4 degrees rotation
        
        positions.push({
          name: skill.name,
          rating: skill.rating,
          index,
          isSpread: false,
          fixedPosition: { x: pos.x, y: pos.y, rotation }
        });
        
        usedPositions.push({ x: pos.x, y: pos.y, size });
      });
      
      return positions;
    };
    
    setSkillsWithPositions(generateNonOverlappingPositions());
  }, []);
  
  // Handle drag end event
  const handleDragEnd = (index: number, newPosition: Position) => {
    setSkillsWithPositions(prev => 
      prev.map((skill, i) => 
        i === index 
          ? { ...skill, fixedPosition: newPosition } 
          : skill
      )
    );
  };
  
  return (
    <section 
      id="skills" 
      className="relative section-padding dark-section overflow-hidden"
    >
      {/* Dark Background */}
      <DarkBackground />
      
      <div className="container-custom relative z-10">
        <h2 className="section-title text-blue-300">Skills</h2>
        
        <div 
          className="relative h-[550px] mt-4 overflow-hidden rounded-lg bg-gray-800/20 backdrop-blur-sm p-4 border border-blue-500/20 skills-container"
          onMouseEnter={() => setIsSpread(true)}
          onMouseLeave={() => setIsSpread(false)}
        >
          {/* Instruction text */}
          <div className={`absolute left-1/2 top-4 transform -translate-x-1/2 text-white text-center transition-opacity duration-1000 ${isSpread ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-sm bg-blue-900/50 px-3 py-1 rounded-full backdrop-blur-sm">Hover to reveal skills</p>
          </div>
          
          {/* Drag instruction */}
          {isSpread && (
            <div className="absolute left-1/2 top-4 transform -translate-x-1/2 text-white text-center z-10 transition-opacity duration-500 opacity-70 hover:opacity-100">
              <p className="text-sm bg-blue-600/80 px-3 py-1 rounded-full backdrop-blur-sm">Drag skills to reposition</p>
            </div>
          )}
          
          {/* Skill clouds */}
          {skillsWithPositions.map((skill) => (
            <SkillCloud 
              key={skill.index}
              name={skill.name}
              rating={skill.rating}
              index={skill.index}
              isSpread={isSpread}
              fixedPosition={skill.fixedPosition}
              onDragEnd={handleDragEnd}
              isDraggable={isSpread}
            />
          ))}
        </div>
      </div>
    </section>
  );
}