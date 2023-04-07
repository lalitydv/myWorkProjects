import { applyMiddleware, createStore } from "redux";
import rootred from "./redux/main";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
    key: "reducer",
    storage: storage,
};

const presistedReducer = persistReducer(persistConfig, rootred);

const store = createStore(presistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { persistor, store };
