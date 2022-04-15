import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import { authApi } from '../Services/AuthApi';
import { uploadApi } from '../Services/uploadApi';
import { postApi } from '../Services/PostApi';
import { userApi } from '../Services/UserApi';
import authReducer from '../Redux/authSlice'
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
//   whitelist: ["quotes"],
};


const rootReducer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [uploadApi.reducerPath]:uploadApi.reducer,
    [postApi.reducerPath]:postApi.reducer,
    [userApi.reducerPath]:userApi.reducer
});

export { rootPersistConfig, rootReducer };