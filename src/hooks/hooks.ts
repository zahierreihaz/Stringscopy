import { useState } from 'react';
import { STRINGS } from '@/strings/strings';

interface MileageRecord {
  mileage: string;
  dateTaken: string;
  creator: string;
}

interface MileageRecorderReturn {
  primaryMileage: string;
  setPrimaryMileage: (value: string) => void;
  showNowPickers: boolean;
  showLastKnown: boolean;
  setShowLastKnown: (value: boolean) => void;
  selectedDate: Date | null;  
  setSelectedDate: (value: Date | null) => void;
  validationError: string;
  setValidationError: (value: string) => void;
  isSaveDisabled: boolean;
  handleSave: () => void;
  handleCancel: () => void;
  handleNowClick: () => void;
}

interface HoursRecorderReturn {
  secondaryHours: string;
  setSecondaryHours: (value: string) => void;
  showSecondaryPickers: boolean;
  showSecondaryLastKnown: boolean;
  setShowSecondaryLastKnown: (value: boolean) => void;
  selectedSecondaryDate: Date | null;
  setSelectedSecondaryDate: (value: Date | null) => void;
  secondaryValidationError: string;
  setSecondaryValidationError: (value: string) => void;
  isSecondarySaveDisabled: boolean;
  handleSecondarySave: () => void;
  handleSecondaryCancel: () => void;
  handleSecondaryNowClick: () => void;
}

interface MockDataReturn {
  lastKnownMileage: number;
  mileageHistory: MileageRecord[];
  lastKnownHours: number;
  hoursHistory: MileageRecord[];
}

export function useMileageRecorder(lastKnownMileage: number): MileageRecorderReturn {
  const [primaryMileage, setPrimaryMileage] = useState('');
  const [showNowPickers, setShowNowPickers] = useState(false);
  const [showLastKnown, setShowLastKnown] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [validationError, setValidationError] = useState('');

  const handleSave = () => {
    const mileageValue = parseFloat(primaryMileage.replace(/,/g, ''));

    if (mileageValue < lastKnownMileage) {
      setValidationError(STRINGS.FEEDBACK.ERROR.MILEAGE_TOO_LOW(lastKnownMileage));
      return;
    }

    setValidationError('');
    console.log('Saving mileage:', primaryMileage);
    // Add save logic here
  };

  const handleCancel = () => {
    setPrimaryMileage('');
    setValidationError('');
    setShowNowPickers(false);
  };

  const handleNowClick = () => {
    setShowNowPickers(true);
    setSelectedDate(new Date());
  };

  const isSaveDisabled = !primaryMileage.trim();

  return {
    primaryMileage,
    setPrimaryMileage,
    showNowPickers,
    showLastKnown,
    setShowLastKnown,
    selectedDate,
    setSelectedDate,
    validationError,
    setValidationError,
    isSaveDisabled,
    handleSave,
    handleCancel,
    handleNowClick,
  };
}

export function useHoursRecorder(lastKnownHours: number): HoursRecorderReturn {
  const [secondaryHours, setSecondaryHours] = useState('');
  const [showSecondaryPickers, setShowSecondaryPickers] = useState(false);
  const [showSecondaryLastKnown, setShowSecondaryLastKnown] = useState(false);
  const [selectedSecondaryDate, setSelectedSecondaryDate] = useState<Date | null>(null);
  const [secondaryValidationError, setSecondaryValidationError] = useState('');

  const handleSecondarySave = () => {
    const hoursValue = parseFloat(secondaryHours);

    if (hoursValue < lastKnownHours) {
      setSecondaryValidationError(STRINGS.FEEDBACK.ERROR.HOURS_TOO_LOW(lastKnownHours));
      return;
    }

    setSecondaryValidationError('');
    console.log('Saving hours:', secondaryHours);
    // Add save logic here
  };

  const handleSecondaryCancel = () => {
    setSecondaryHours('');
    setSecondaryValidationError('');
    setShowSecondaryPickers(false);
  };

  const handleSecondaryNowClick = () => {
    setShowSecondaryPickers(true);
    setSelectedSecondaryDate(new Date());
  };

  const isSecondarySaveDisabled = !secondaryHours.trim();

  return {
    secondaryHours,
    setSecondaryHours,
    showSecondaryPickers,
    showSecondaryLastKnown,
    setShowSecondaryLastKnown,
    selectedSecondaryDate,
    setSelectedSecondaryDate,
    secondaryValidationError,
    setSecondaryValidationError,
    isSecondarySaveDisabled,
    handleSecondarySave,
    handleSecondaryCancel,
    handleSecondaryNowClick,
  };
}

export function useShowMore() {
  const [showMore, setShowMore] = useState(false);
  
  return {
    showMore,
    setShowMore,
  };
}

export function useMockData(): MockDataReturn {
  const [lastKnownMileage] = useState(236000);
  const [lastKnownHours] = useState(12);
  
  const [mileageHistory] = useState<MileageRecord[]>([
    { mileage: '236,000 km', dateTaken: '9/24/25 1:40 PM', creator: 'Robert Doe' },
    { mileage: '5,500 km', dateTaken: '9/23/25 10:10 AM', creator: 'Anna Smith' },
    { mileage: '5,054 km', dateTaken: '9/22/25 1:40 PM', creator: 'Josh Lee' },
    { mileage: '5,054 km', dateTaken: '9/22/25 1:40 PM', creator: 'Josh Lee' },
    { mileage: '5,054 km', dateTaken: '9/22/25 1:40 PM', creator: 'Josh Lee' },
  ]);
  
  const [hoursHistory] = useState<MileageRecord[]>([
    { mileage: '12 hr', dateTaken: '9/24/25 1:40 PM', creator: 'Robert Doe' },
    { mileage: '10 hr', dateTaken: '9/23/25 10:10 AM', creator: 'Anna Smith' },
    { mileage: '8 hr', dateTaken: '9/22/25 1:40 PM', creator: 'Josh Lee' },
    { mileage: '15 hr', dateTaken: '9/21/25 2:30 PM', creator: 'Sarah Johnson' },
    { mileage: '11 hr', dateTaken: '9/20/25 9:15 AM', creator: 'Mike Davis' },
  ]);

  return {
    lastKnownMileage,
    mileageHistory,
    lastKnownHours,
    hoursHistory,
  };
}