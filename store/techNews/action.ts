import { API_DETAIL, API_LIST } from "@/constants/Endpoints";
import { AppDispatch, RootState } from "..";
import { setError, setLoading, setTechListIds, setTechListWithDetails } from "./slice";

const TechNewsThunks = {
    fetchTechListIds(){
        return async function (dispatch: AppDispatch){
            dispatch(setLoading(true));
            dispatch(setError(undefined));
            try {
                const response = await fetch(API_LIST);   
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const jsonData = await response.json();
                if (!Array.isArray(jsonData)) {
                    throw new Error('Invalid response format: expected an array of strings');
                }
                dispatch(setTechListIds(jsonData.slice(0,20)));
                dispatch(TechNewsThunks.fetchTechListDetails());
            } catch (err: any) {
                dispatch(setError(err instanceof Error ? err.message : 'An unknown error occurred'));
                dispatch(setLoading(false));
            }
        };
    },
    fetchTechListDetails(){
        return async function (dispatch: AppDispatch, getState: () => RootState){
            try {
                const { techListIds } = getState().techNewsReducer;
                const detailPromises = techListIds.map((id) =>
                    fetch(`${API_DETAIL}/${id}.json`).then((res) => {
                        if (!res.ok) throw new Error(`Failed to fetch item ${id}`);
                        return res.json();
                    })
                );
                const details = await Promise.all(detailPromises);
                dispatch(setTechListWithDetails(details));
            } catch (err) {
                dispatch(setError(err instanceof Error ? err.message : 'Unknown error'));
            } finally {
                dispatch(setLoading(false));
            }
        }
    }
}

export default TechNewsThunks;