export const RenderizadoCondicional = ({ responseState, errorState, LoadingState, responseComponent, errorComponent, LoadingComponent }) => {

    if (LoadingState) {
        return LoadingComponent
    }

    if (responseState) {
        return responseComponent
    }

    if (errorState) {
        return errorComponent
    }
}
