export interface VisaItem {
  name: string;
  processingTime?: string;
}

export interface VisaCategory {
  country: string;
  visas: VisaItem[];
}

export const visaData: VisaCategory[] = [
  {
    country: "UAE VISA",
    visas: [
      {
        name: "48 HOURS DUBAI TRANSIT VISA",
      },
      {
        name: "96 HOURS DUBAI TRANSIT VISA",
      },
      {
        name: "30 DAYS SINGLE ENTRY TOURIST VISA",
      },
      {
        name: "30 DAYS SINGLE ENTRY TOURIST VISA (CHILD)",
      },
      {
        name: "60 DAYS SINGLE ENTRY TOURIST VISA",
      },
      {
        name: "60 DAYS SINGLE ENTRY TOURIST VISA (CHILD)",
      },
      {
        name: "EXPRESS VISA ADITIONAL CHARGES",
      },
      {
        name: "30 DAYS MULTIPLE ENTRY TOURIST VISA",
      },
      {
        name: "30 DAYS MULTIPLE ENTRY TOURIST VISA (CHILD)",
      },
      {
        name: "60 DAYS MULTIPLE ENTRY TOURIST VISA",
      },
      {
        name: "60 DAYS MULTIPLE ENTRY TOURIST VISA (CHILD)",
      },
      {
        name: "30 DAYS COVID INSURANCE",
      },
      {
        name: "60 DAYS COVID INSURANCE",
      },
      {
        name: "30 DAYS INSIDE COUNTRY EXTENSION",
      },
      {
        name: "MODIFICATION",
      },
      {
        name: "CANCELLATION",
      },
      {
        name: "ABSCOND FEE",
      },
      {
        name: "THAILAND E VISA",
      },
      {
        name: "NEW ZEALAND VISA",
      },
    ],
  },

  {
    country: "SAUDI VISA",
    visas: [
      {
        name: "SINGLE ENTRY TOURIST VISA",
      },
      {
        name: "1 YEAR MULTI ENTRY BUSINESS STAMPED VISA",
      },
      {
        name: "UMRAH VISA",
      },
    ],
  },

  {
    country: "OMAN VISA",
    visas: [
      {
        name: "10 DAYS OMAN TOURIST VISA",
      },
      {
        name: "30 DAYS OMAN TOURIST VISA",
      },
    ],
  },

  {
    country: "BAHRAIN VISA",
    visas: [
      {
        name: "14 DAYS BAHRAIN TOURIST VISA (Sponsored)",
      },
      {
        name: "30 DAYS BAHRAIN TOURIST VISA (Sponsored)",
      },
      {
        name: "1 YEAR MULTIPLE ENTRY VISA (E visa)",
      },
    ],
  },

  {
    country: "GLOBAL VISA",
    visas: [
      {
        name: "ARMENIA",
        processingTime: "3 WORKING DAYS",
      },
      {
        name: "AUSTRALIA",
        processingTime: "25 WORKING DAYS",
      },
      {
        name: "AZERBAIJAN",
        processingTime: "4 WORKING DAYS",
      },
      {
        name: "CANADA",
        processingTime: "120 WORKING DAYS",
      },
      {
        name: "EGYPT SINGLE ENTRY VISA",
        processingTime: "5 WORKING DAYS",
      },
      {
        name: "30 DAYS INDIA TOURIST E-VISA",
        processingTime: "3 WORKING DAYS",
      },
      {
        name: "1 YEAR INDIA TOURIST E-VISA",
        processingTime: "4 WORKING DAYS",
      },
      {
        name: "5 YEAR INDIA TOURIST E-VISA",
        processingTime: "4 WORKING DAYS",
      },
      {
        name: "INDIA MEDICAL E-VISA",
        processingTime: "4 WORKING DAYS",
      },
      {
        name: "INDIA MEDICAL ATTENDANT E-VISA",
        processingTime: "4 WORKING DAYS",
      },
      {
        name: "KENYA",
        processingTime: "4 WORKING DAYS",
      },
      {
        name: "KUWAIT",
        processingTime: "1-2 WORKING DAYS",
      },
      {
        name: "KYRGYZSTAN",
        processingTime: "15 WORKING DAYS",
      },
      {
        name: "MALAYSIA E-VISA",
        processingTime: "4 WORKING DAYS",
      },
      {
        name: "MALAYSIA DIGITAL ARRIVAL CARD",
        processingTime: "24 HOURS",
      },
      {
        name: "MOROCCO",
        processingTime: "4 WORKING DAYS",
      },
      {
        name: "PHILIPPINES",
        processingTime: "7 WORKING DAYS",
      },
      {
        name: "QATAR",
        processingTime: "3 WORKING DAYS",
      },
      {
        name: "SCHENGEN",
        processingTime: "12 WORKING DAYS",
      },
      {
        name: "SINGAPORE",
        processingTime: "6 WORKING DAYS",
      },
      {
        name: "SOUTH AFRICA",
        processingTime: "12 WORKING DAYS",
      },
      {
        name: "SRI LANKA (SAARC COUNTRIES)",
        processingTime: "3 WORKING DAYS",
      },
      {
        name: "SRI LANKA (OTHER COUNTRIES)",
        processingTime: "3 WORKING DAYS",
      },
      {
        name: "TANZANIA",
        processingTime: "5 WORKING DAYS",
      },
      {
        name: "THAILAND",
        processingTime: "20 WORKING DAYS",
      },
      {
        name: "TURKEY E-VISA",
        processingTime: "3 WORKING DAYS",
      },
      {
        name: "TURKEY STICKER VISA",
        processingTime: "7 WORKING DAYS",
      },
      {
        name: "UNITED KINGDOM",
        processingTime: "15 WORKING DAYS",
      },
      {
        name: "UNITED STATES OF AMERICA",
        processingTime: "15 WORKING DAYS",
      },
      {
        name: "UZBEKISTAN",
        processingTime: "6 WORKING DAYS",
      },
      {
        name: "VIETNAM",
        processingTime: "5 WORKING DAYS",
      },
    ],
  },
];

export default visaData;