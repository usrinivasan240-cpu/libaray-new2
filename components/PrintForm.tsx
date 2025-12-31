'use client';

import { useState } from 'react';
import { FileText, Printer, Upload, CreditCard } from 'lucide-react';

export default function PrintForm() {
  const [formData, setFormData] = useState({
    documentName: '',
    printType: 'bw',
    copies: 1,
    paymentMethod: 'gpay',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        documentName: '',
        printType: 'bw',
        copies: 1,
        paymentMethod: 'gpay',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center animate-fade-in">
        <Printer className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-400 mb-2">
          Print Request Submitted!
        </h3>
        <p className="text-gray-400">
          Your print request has been submitted successfully. We will process it shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
      <div className="flex items-center space-x-3 mb-6">
        <Printer className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold text-white">Print Request Form</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Document Name
          </label>
          <input
            type="text"
            value={formData.documentName}
            onChange={(e) =>
              setFormData({ ...formData, documentName: e.target.value })
            }
            placeholder="e.g., Unit-2 Notes.pdf"
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Upload Document
          </label>
          <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
            <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-sm">
              Drag and drop your file here, or click to browse
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Supports PDF, DOC, DOCX (Max 10MB)
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Print Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label
              className={`flex items-center justify-center space-x-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                formData.printType === 'bw'
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <input
                type="radio"
                value="bw"
                checked={formData.printType === 'bw'}
                onChange={(e) =>
                  setFormData({ ...formData, printType: e.target.value })
                }
                className="hidden"
              />
              <FileText className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300">Black & White</span>
            </label>
            <label
              className={`flex items-center justify-center space-x-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                formData.printType === 'color'
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <input
                type="radio"
                value="color"
                checked={formData.printType === 'color'}
                onChange={(e) =>
                  setFormData({ ...formData, printType: e.target.value })
                }
                className="hidden"
              />
              <FileText className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300">Color</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Number of Copies
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={formData.copies}
            onChange={(e) =>
              setFormData({ ...formData, copies: parseInt(e.target.value) })
            }
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Payment Method
          </label>
          <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="text-gray-300">GPay (Google Pay)</span>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Scan the QR code at the counter to complete payment via GPay
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Printer className="w-5 h-5" />
          <span>Submit Print Request</span>
        </button>
      </form>
    </div>
  );
}
