import {
  FluentProvider,
  webLightTheme,
  Input,
  Button,
  MessageBar,
  MessageBarBody,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHeaderCell,
  Link,
  Body1,
  Body1Strong,
} from '@fluentui/react-components';
import { DatePicker } from '@fluentui/react-datepicker-compat';
import { TimePicker } from '@fluentui/react-timepicker-compat';
import {
  Checkmark20Regular,
  Dismiss20Regular,
  CalendarClock20Regular,
  History20Regular,
  ChevronDown12Regular,
} from '@fluentui/react-icons';
import { useStyles } from '@/styles/useStyles';
import { useMileageRecorder, useHoursRecorder, useShowMore, useMockData } from '@/hooks/hooks';
import { STRINGS } from '@/strings/strings';

export default function App() {
  const styles = useStyles();
  
  // Custom hooks
  const { lastKnownMileage, mileageHistory, lastKnownHours, hoursHistory } = useMockData();
  const { showMore, setShowMore } = useShowMore();
  
  const {
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
  } = useMileageRecorder(lastKnownMileage);

  const {
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
  } = useHoursRecorder(lastKnownHours);

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* RECORD MILEAGE Section */}
          <div className={styles.header}>{STRINGS.HEADER.RECORD_MILEAGE}</div>

          <div className={styles.contentWrapper}>
            {/* Validation Error Message */}
            {validationError && (
              <div className={styles.errorMessage}>
                <MessageBar intent="error">
                  <MessageBarBody>{validationError}</MessageBarBody>
                </MessageBar>
              </div>
            )}

            {/* Primary Mileage Input (km) */}
            <div className={styles.mileageSection}>
              <div className={styles.mileageInputRow}>
                <Input
                  appearance="filled-darker"
                  value={primaryMileage}
                  onChange={(e) => {
                    setPrimaryMileage(e.target.value);
                    setValidationError('');
                  }}
                  placeholder={STRINGS.PLACEHOLDERS.EMPTY_VALUE}
                  contentAfter={<span className={styles.unitLabel}>{STRINGS.UNITS.KILOMETERS}</span>}
                  className={styles.inputMinWidth}
                />
                
                {showNowPickers && (
                  <div className={styles.dateTimeRow}>
                    <DatePicker 
                      appearance="filled-darker"
                      placeholder={STRINGS.PLACEHOLDERS.SELECT_DATE}
                      value={selectedDate}
                      onSelectDate={(date) => setSelectedDate(date)}
                      className={styles.dateTimePicker}
                    />
                    <TimePicker 
                      appearance="filled-darker"
                      placeholder={STRINGS.PLACEHOLDERS.SELECT_TIME}
                      onSelectTime={() => {}}
                      className={styles.dateTimePicker}
                    />
                  </div>
                )}
                
                <div className={styles.buttonsRow}>
                  <div className={styles.buttonGroup}>
                    <Button 
                      icon={<Checkmark20Regular />} 
                      appearance="transparent" 
                      disabled={isSaveDisabled}
                      onClick={handleSave}
                      className={styles.successButton}
                    />
                    <Button 
                      icon={<Dismiss20Regular />} 
                      appearance="transparent" 
                      disabled={isSaveDisabled && !showNowPickers}
                      onClick={handleCancel}
                      className={styles.dangerButton}
                    />
                  </div>
                  
                  <div className={styles.buttonGroup}>
                    {!showNowPickers && (
                      <Button 
                        icon={<CalendarClock20Regular />}
                        onClick={handleNowClick}
                        appearance="transparent"
                        className={styles.responsiveButton}
                      >
                        <span className={styles.buttonText}>
                          <Body1>{STRINGS.BUTTONS.NOW}</Body1>
                        </span>
                      </Button>
                    )}
                    
                    <Button 
                      appearance="subtle" 
                      icon={<History20Regular />}
                      iconPosition="before"
                      onClick={() => setShowLastKnown(!showLastKnown)}
                      className={styles.responsiveButton}
                    >
                      <span className={styles.buttonText}>
                        <Body1>{lastKnownMileage.toLocaleString()} {STRINGS.UNITS.KILOMETERS}</Body1>
                        <ChevronDown12Regular className={styles.chevronIcon} />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Last Known Table */}
              {showLastKnown && (
                <>
                  <div className={styles.lastKnownHeader}>
                    <Body1Strong>{STRINGS.TABLE.LAST_KNOWN}</Body1Strong>
                  </div>
                  <div className={styles.tableContainer}>
                    <Table size="extra-small" className={styles.compactTable}>
                      <TableHeader>
                        <TableRow>
                          <TableHeaderCell>{STRINGS.TABLE.MILEAGE}</TableHeaderCell>
                          <TableHeaderCell>{STRINGS.TABLE.DATE_TAKEN}</TableHeaderCell>
                          <TableHeaderCell>{STRINGS.TABLE.CREATED_BY}</TableHeaderCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mileageHistory.map((record, index) => (
                          <TableRow key={index}>
                            <TableCell>{record.mileage}</TableCell>
                            <TableCell>{record.dateTaken}</TableCell>
                            <TableCell>{record.creator}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </>
              )}
            </div>

            {/* Secondary Hours Input (shown when expanded) */}
            {showMore && (
              <>
                {/* Secondary Validation Error Message */}
                {secondaryValidationError && (
                  <div className={styles.errorMessage}>
                    <MessageBar intent="error">
                      <MessageBarBody>{secondaryValidationError}</MessageBarBody>
                    </MessageBar>
                  </div>
                )}
                
                <div className={styles.mileageSection}>
                  <div className={styles.mileageInputRow}>
                    <Input
                      appearance="filled-darker"
                      value={secondaryHours}
                      onChange={(e) => {
                        setSecondaryHours(e.target.value);
                        setSecondaryValidationError('');
                      }}
                      placeholder={STRINGS.PLACEHOLDERS.EMPTY_VALUE}
                      contentAfter={<span className={styles.unitLabel}>{STRINGS.UNITS.HOURS}</span>}
                      className={styles.inputMinWidth}
                    />
                    
                    {showSecondaryPickers && (
                      <div className={styles.dateTimeRow}>
                        <DatePicker 
                          appearance="filled-darker"
                          placeholder={STRINGS.PLACEHOLDERS.SELECT_DATE}
                          value={selectedSecondaryDate}
                          onSelectDate={(date) => setSelectedSecondaryDate(date)}
                          className={styles.dateTimePicker}
                        />
                        <TimePicker 
                          appearance="filled-darker"
                          placeholder={STRINGS.PLACEHOLDERS.SELECT_TIME}
                          onSelectTime={() => {}}
                          className={styles.dateTimePicker}
                        />
                      </div>
                    )}
                    
                    <div className={styles.buttonsRow}>
                      <div className={styles.buttonGroup}>
                        <Button 
                          icon={<Checkmark20Regular />} 
                          appearance="transparent" 
                          disabled={isSecondarySaveDisabled}
                          onClick={handleSecondarySave}
                          className={styles.successButton}
                        />
                        <Button 
                          icon={<Dismiss20Regular />} 
                          appearance="transparent" 
                          disabled={isSecondarySaveDisabled && !showSecondaryPickers}
                          onClick={handleSecondaryCancel}
                          className={styles.dangerButton}
                        />
                      </div>
                      
                      <div className={styles.buttonGroup}>
                        {!showSecondaryPickers && (
                          <Button 
                            icon={<CalendarClock20Regular />}
                            onClick={handleSecondaryNowClick}
                            appearance="transparent"
                            className={styles.responsiveButton}
                          >
                            <span className={styles.buttonText}>
                              <Body1>{STRINGS.BUTTONS.NOW}</Body1>
                            </span>
                          </Button>
                        )}
                        
                        <Button 
                          appearance="subtle" 
                          icon={<History20Regular />}
                          iconPosition="before"
                          onClick={() => setShowSecondaryLastKnown(!showSecondaryLastKnown)}
                          className={styles.responsiveButton}
                        >
                          <span className={styles.buttonText}>
                            <Body1>{lastKnownHours} {STRINGS.UNITS.HOURS}</Body1>
                            <ChevronDown12Regular className={styles.chevronIcon} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Last Known Hours Table */}
                  {showSecondaryLastKnown && (
                    <>
                      <div className={styles.lastKnownHeader}>
                        <Body1Strong>{STRINGS.TABLE.LAST_KNOWN}</Body1Strong>
                      </div>
                      <div className={styles.tableContainer}>
                        <Table size="extra-small" className={styles.compactTable}>
                          <TableHeader>
                            <TableRow>
                              <TableHeaderCell>{STRINGS.TABLE.HOURS}</TableHeaderCell>
                              <TableHeaderCell>{STRINGS.TABLE.DATE_TAKEN}</TableHeaderCell>
                              <TableHeaderCell>{STRINGS.TABLE.CREATED_BY}</TableHeaderCell>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {hoursHistory.map((record, index) => (
                              <TableRow key={index}>
                                <TableCell>{record.mileage}</TableCell>
                                <TableCell>{record.dateTaken}</TableCell>
                                <TableCell>{record.creator}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}

            {/* Show more/Show less link */}
            <div className={styles.linkContainer}>
              <Link onClick={() => setShowMore(!showMore)}>
                {showMore ? STRINGS.BUTTONS.SHOW_LESS : STRINGS.BUTTONS.SHOW_MORE}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}