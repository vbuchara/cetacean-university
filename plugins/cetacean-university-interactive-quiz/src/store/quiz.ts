import { createReduxStore, register } from "@wordpress/data";
import type { ValueOf } from "type-fest";

const defaultState = {
    answersIds: [] as string[]
};

export type QuizStoreState = typeof defaultState;

const actions = {
    addRegisteredAnswerId: (answerId: string) => {
        return {
            type: "ADD_ANSWER_ID",
            answerId
        } as const;
    },
    registerAnswersIdsSet: (answersIdsSet: Set<string>) => {
        return {
            type: "REGISTER_ANSWERS_IDS_SET",
            answersIdsSet
        } as const;
    },
    removeRegisteredAnswerId: (answerId: string) => {
        return {
            type: "REMOVE_ANSWER_ID",
            answerId
        } as const;
    },
    clearRegisteredAnswersIds: () => {
        return {
            type: "CLEAR_REGISTERED_ANSWERS_IDS"
        } as const;
    }
}

export type QuizStoreActions = typeof actions;

export type QuizStoreAction = ReturnType<ValueOf<QuizStoreActions>>;

const selectors = {
    getRegisteredAnswersIds: (state: QuizStoreState) => {
        return new Set(state.answersIds);
    }
}

export type QuizStoreSelectors = typeof selectors;

const quizStore = createReduxStore<
    QuizStoreState, QuizStoreActions, QuizStoreSelectors
>("cetacean-university/quiz-store", {
    reducer: (
        state: QuizStoreState = defaultState, 
        action: QuizStoreAction
    ): QuizStoreState => {
        switch(action.type){
            case "ADD_ANSWER_ID":{
                const answerIdsSet = new Set(state.answersIds);
                answerIdsSet.add(action.answerId);

                return {
                    answersIds: Array.from(answerIdsSet)
                }
            }
            case "REGISTER_ANSWERS_IDS_SET":{
                return {
                    answersIds: Array.from(action.answersIdsSet)
                };
            }
            case "REMOVE_ANSWER_ID":{
                const answerIdsSet = new Set(state.answersIds);
                answerIdsSet.delete(action.answerId);

                return {
                    answersIds: Array.from(answerIdsSet)
                }
            }
            case "CLEAR_REGISTERED_ANSWERS_IDS":{
                return {
                    answersIds: []
                }
            }
            default:{
                return state;
            }
        }
    },
    actions: actions,
    selectors: selectors,
    initialState: defaultState,
});

register(quizStore);

export default quizStore;