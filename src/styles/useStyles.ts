import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.shadow8,
    maxWidth: '400px',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  header: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
    marginBottom: tokens.spacingVerticalM,
  },
  contentWrapper: {
    marginTop: tokens.spacingVerticalM,
  },
  mileageSection: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalS,
    paddingLeft: tokens.spacingHorizontalS,
    paddingRight: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingVerticalM,
  },
  mileageInputRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  buttonsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXXS,
    flexWrap: 'wrap',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: tokens.spacingHorizontalXXS,
  },
  tableContainer: {
    overflowX: 'auto',
    marginTop: tokens.spacingVerticalS,
  },
  compactTable: {
    minWidth: '100%',
  },
  dateTimeRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: tokens.spacingHorizontalS,
    alignItems: 'center',
  },
  dateTimePicker: {
    flex: 1,
    minWidth: 0,
  },
  errorMessage: {
    marginBottom: tokens.spacingVerticalS,
  },
  unitLabel: {
    color: tokens.colorNeutralForeground1,
  },
  inputMinWidth: {
    minWidth: '110px',
  },
  successButton: {
    color: tokens.colorStatusSuccessForeground1,
  },
  dangerButton: {
    color: tokens.colorStatusDangerForeground1,
  },
  lastKnownHeader: {
    fontWeight: tokens.fontWeightSemibold,
    marginTop: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalXXS,
  },
  chevronIcon: {
    marginLeft: tokens.spacingHorizontalXXS,
    '@media (max-width: 369px)': {
      display: 'none',
    },
  },
  linkContainer: {
    marginBottom: tokens.spacingVerticalM,
  },
  buttonText: {
    '@media (max-width: 369px)': {
      display: 'none',
    },
  },
  responsiveButton: {
    '@media (max-width: 369px)': {
      minWidth: 'auto',
      paddingLeft: tokens.spacingHorizontalXS,
      paddingRight: tokens.spacingHorizontalXS,
    },
  },
});