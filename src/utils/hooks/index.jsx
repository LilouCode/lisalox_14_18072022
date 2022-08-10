import { useContext} from "react";
import { SourceContext} from '../context'

export function useSource() {
    const { source, addSource, searchSource, filtredSource } = useContext(SourceContext)
    return { source, addSource, searchSource, filtredSource }
}