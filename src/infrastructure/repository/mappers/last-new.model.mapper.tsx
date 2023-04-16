import { LastNewModel } from "../models";
import { LastNew } from "../../../application/src/domain";
import { LastNewType } from "../types";

class LastNewModelMapper {
  toLastNew(lastNewModel: LastNewModel): LastNew {
    const lastNew: LastNew = new LastNew();
    lastNew.setId(lastNewModel.getId());
    lastNew.setTitle(lastNewModel.getTitle());
    lastNew.setDescription(lastNewModel?.getDescription() ?? "");
    lastNew.setImg(lastNewModel?.getImg() ?? "");
    lastNew.setContent(lastNewModel.getContent());
    lastNew.setColor(lastNewModel.getColor());
    return lastNew;
  }

  toLastNews(lastNewModels: LastNewModel[]): LastNew[] | [] {
    return (
      lastNewModels?.map((lastNewModel: LastNewModel) =>
        this.toLastNew(lastNewModel)
      ) ?? []
    );
  }

  toLastNewModel(lastNew: LastNew | LastNewType): LastNewModel {
    const lastNewModel: LastNewModel = new LastNewModel();
    if (lastNew instanceof LastNew) {
      lastNewModel.setTitle(lastNew.getTitle());
      lastNewModel.setDescription(lastNew?.getDescription() ?? "");
      lastNewModel.setImg(lastNew?.getImg() ?? "");
      lastNewModel.setContent(lastNew.getContent());
      lastNewModel.setColor(lastNew.getColor());
    } else {
      lastNewModel.setId(lastNew.id);
      lastNewModel.setTitle(lastNew.title);
      lastNewModel.setDescription(lastNew?.description ?? "");
      lastNewModel.setImg(lastNew?.img ?? "");
      lastNewModel.setContent(lastNew.content);
      lastNewModel.setColor(lastNew.color);
    }
    return lastNewModel;
  }

  toLastNewModels(lastNews: LastNew[] | LastNewType[]): LastNewModel[] | [] {
    return (
      lastNews?.map((lastNew: LastNew | LastNewType) =>
        this.toLastNewModel(lastNew)
      ) ?? []
    );
  }
}

export default LastNewModelMapper;
