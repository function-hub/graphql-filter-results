const filterNeedField = (fields: any, fieldsArray: string[]) => {
  const { selectionSet } = fields;
  if (selectionSet) {
    const { selections } = selectionSet;
    if (selections && selections.length > 0) {
      selections.forEach((selection: any) => {
        fieldsArray.push(selection.name.value);
        filterNeedField(selection, fieldsArray);
      });
    }
  }
  return fieldsArray;
};

export const pickoutFieldWithInfo = (resolverInfo: any) => {
  const { operation } = resolverInfo;
  return filterNeedField(operation, []);
};
