import type { NextApiRequest, NextApiResponse } from 'next';

interface PrintRequest {
  documentName: string;
  printType: string;
  copies: number;
  paymentMethod: string;
  status: string;
  requestId: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    success: boolean;
    data?: PrintRequest;
    message?: string;
  }>
) {
  if (req.method === 'POST') {
    try {
      const { documentName, printType, copies, paymentMethod } = req.body;

      if (!documentName || !printType || !copies || !paymentMethod) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required',
        });
      }

      const printRequest: PrintRequest = {
        documentName,
        printType,
        copies,
        paymentMethod,
        status: 'Pending',
        requestId: `PR${Date.now()}`,
      };

      res.status(200).json({
        success: true,
        data: printRequest,
        message: 'Print request submitted successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error submitting print request',
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }
}
