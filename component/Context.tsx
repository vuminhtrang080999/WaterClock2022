import React, {createContext, useState} from 'react';

type PropsDongHo = {
  ADDRESS: string;
  CREATED: string;
  CUSTOMER_CODE: string;
  CUSTOMER_NAME: string;
  METER_NO: string;
  MODULE_NO: string;
  PHONE: string;
};

type PropsGetMessage = {
  MESSAGE_ID: string;
  MESSAGE_CONTENT: string;
  MESSAGE_TYPE: string;
  SEND_USER_ID: string;
  MARK_READ: string;
  CREATED: string;
};

type PropsGetEventByDate = {
  EVT_TIME: string;
  EVT_DESC: string;
  EVT_DESC_VN: string;
};

type PropsGetBilling = {
  METER_NO: string;
  BILLING_ID: string;
  CUSTOMER_CODE: string;
  ACTIVE_TOTAL_START: string;
  ACTIVE_TOTAL_END: string;
  TOTAL_USED: string;
  TOTAL_PAY: string;
  START_DATE: string;
  END_DATE: string;
  UPDATED: string;
  CREATED: string;
  STATUS: string;
  TARIFF_ID: string;
};

type PropsState = {
  USER_ACCOUNT: string;
  USER_ADDRESS: string;
  USER_EMAIL: string;
  USER_ID: string;
  USER_NAME: string;
  USER_TEL: string;
  DATA: any[];
  PROFILE_IMAGE: string;
  NOTIFICATION: number;
  dataSoDongHo: string[];
  dataDongHo: PropsDongHo[];
  dataGetMessage: PropsGetMessage[];
  getEventByDate: PropsGetEventByDate[];
  getBilling: PropsGetBilling[];
  UP_LEVEL: string;
  DOWN_LEVEL: string;
  TOTAL_USED: string;
  DongHo: string;
  momoAccount: string;
  bankAccount: string;
  momoIsValid: boolean;
  bankisValid: boolean;
};

type StoreProps = {
  state: PropsState;
  setState: React.Dispatch<React.SetStateAction<PropsState>>;
};

export const StoreContext = React.createContext<StoreProps>(null);

export const AuthContext = React.createContext();

const UserNameContextProvider = ({children}) => {
  const [state, setState] = useState<PropsState>({
    USER_ID: '',
    USER_ACCOUNT: '',
    USER_NAME: '',
    USER_ADDRESS: '',
    USER_TEL: '',
    USER_EMAIL: '',
    DATA: [],
    PROFILE_IMAGE: '',
    NOTIFICATION: 0,
    dataSoDongHo: [],
    dataDongHo: [],
    dataGetMessage: [],
    getEventByDate: [],
    getBilling: [],
    UP_LEVEL: '',
    DOWN_LEVEL: '',
    TOTAL_USED: '',
    DongHo: '',
    momoAccount: '',
    bankAccount: '',
    momoIsValid: false,
    bankisValid: false,
  });

  // console.log('Default store:', state.NOTIFICATION);

  const UserNameContextData: StoreProps = {
    state: state,
    setState: setState,
  };

  // const toggleTheme : StoreProps={
  //   state: state,
  //   setState: setState,
  // };

  return (
    <StoreContext.Provider value={UserNameContextData}>
      {children}
    </StoreContext.Provider>
  );
};

export default UserNameContextProvider;
