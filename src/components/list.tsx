import React from "react";

type propsType = {
  elements?: any[];
  children: any;
};

const List = (props: propsType) => {
  return (
    <>
      {props?.elements?.map((item: any) => {
        return (
          <div key={item?.id}>
            {React.cloneElement(props.children, { item })}
          </div>
        );
      })}
    </>
  );
};

export default List;
