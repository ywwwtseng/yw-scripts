export const GET_DATA = 'GET_DATA';
export const getData = dataId => {
  return { type: GET_DATA, payload: { dataId } };
};

export const DATA_RECEIVED = 'DATA_RECEIVED';
export const dataReceived = ({ dataId, data }) => {
  return { type: DATA_RECEIVED, payload: { dataId, data } };
};
