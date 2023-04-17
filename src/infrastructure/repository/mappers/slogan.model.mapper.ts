import { Slogan } from "../../../application/src/domain";
import { SloganType } from "../types";
import { SloganModel } from "../models";

class SloganModelMapper {
  toSloganModel(slogan: Slogan | SloganType | null): SloganModel | null {
    const sloganModel: SloganModel = new SloganModel();
    if (slogan instanceof Slogan) {
      sloganModel.setTitle(slogan.getTitle());
      sloganModel.setDescription(slogan.getDescription());
      sloganModel.setImg(slogan.getImg());
      sloganModel.setTextButton(slogan.getTextButton() ?? "");
      sloganModel.setUrl(slogan.getUrl() ?? "");
    } else if (slogan) {
      sloganModel.setId(slogan.id!);
      sloganModel.setTitle(slogan.title!);
      sloganModel.setDescription(slogan.description!);
      sloganModel.setImg(slogan.img!);
      sloganModel.setTextButton(slogan.textButton ?? "");
      sloganModel.setUrl(slogan.url ?? "");
    } else {
      return null;
    }
    return sloganModel;
  }

  toSlogan(sloganModel: SloganModel | null): Slogan | null {
    const slogan: Slogan = new Slogan();
    if (!sloganModel) {
      return null;
    } else {
      slogan.setId(sloganModel.getId()!);
      slogan.setTitle(sloganModel.getTitle()!);
      slogan.setDescription(sloganModel.getDescription()!);
      slogan.setImg(sloganModel.getImg()!);
      slogan.setTextButton(sloganModel.getTextButton() ?? "");
      slogan.setUrl(sloganModel.getUrl() ?? "");
      return slogan;
    }
  }
}

export default SloganModelMapper;
