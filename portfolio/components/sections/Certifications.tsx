
import React, { useState } from 'react';
import DarkBackground from '../DarkBackground';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  certificateUrl?: string;
  onView?: (url: string, title: string) => void;
}

function CertificationItem({ title, issuer, date, certificateUrl, onView }: CertificationProps) {
  return (
    <div className="card-dark rounded-lg p-6 flex flex-col h-full hover:border-l-4 hover:border-accent transition-all">
      <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
      <div className="flex items-center text-gray-300 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <span>{issuer}</span>
      </div>

      {certificateUrl && onView && (
        <div className="mb-4">
          <button
            type="button"
            onClick={() => onView(certificateUrl, title)}
            className="inline-flex items-center px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 rounded-md text-sm font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Certificate
          </button>
        </div>
      )}

      <div className="mt-auto text-sm text-gray-300 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {date}
      </div>
    </div>
  );
}

export default function Certifications() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState<string | undefined>(undefined);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

  function handleViewCertificate(url: string, title: string) {
    setModalUrl(url);
    setModalTitle(title);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
    setModalUrl(undefined);
    setModalTitle(undefined);
  }

  // Helper: check if file is image or PDF
  function isImage(url: string) {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  }

  function isPdf(url: string) {
    return /\.pdf$/i.test(url);
  }

  return (
    <section id="certifications" className="section-padding dark-section relative overflow-hidden">
      <DarkBackground />

      {/* Modal Popup */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-dark-primary rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative animate-fade-in">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-300 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-blue-300 mb-4 text-center">{modalTitle}</h3>
              {modalUrl && isImage(modalUrl) && (
                <img src={modalUrl} alt={modalTitle} className="max-h-[60vh] rounded-lg shadow-lg border border-blue-900" />
              )}
              {modalUrl && isPdf(modalUrl) && (
                <iframe
                  src={modalUrl}
                  title={modalTitle}
                  className="w-full h-[60vh] rounded-lg border border-blue-900 bg-white"
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container-custom relative z-10">
        <h2 className="section-title text-blue-300">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <CertificationItem 
            title="Joy of Computing Using Python"
            issuer="NPTEL"
            date="July-Oct 2024"
            certificateUrl="/documents/The Joy of Computing using Python.png"
            onView={handleViewCertificate}
          />

          <CertificationItem 
            title="Business Intelligence & Analysis"
            issuer="NPTEL"
            date="Jan-Apr 2024"
            certificateUrl="/documents/Business Intelligence & Analytics.png"
            onView={handleViewCertificate}
          />

          <CertificationItem
            title="Internship Certificate - applyGoat"
            issuer="applyGoat"
            date="Jul-Aug 2025"
            certificateUrl="/documents/applyGoat.jpg"
            onView={handleViewCertificate}
          />
        </div>
      </div>
    </section>
  );
}