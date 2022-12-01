import { legacy_createStore as creatStore} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import rootReducer from "../reducers";

const store = creatStore(rootReducer, composeWithDevTools());

export default store;
