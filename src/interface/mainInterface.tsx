import RootStore from "../mst/store/RootStore"
import { ContentModel } from "../mst/model/Content.model"
import { Instance } from "mobx-state-tree"

interface VCard {
    VRam:string
    MemoryType:string
    TDP:string
    PowerConnectors:string
}
export default VCard;


export interface IRootStore extends Instance<typeof RootStore>{

}

export interface IContentModel extends Instance<typeof ContentModel>{
    
}