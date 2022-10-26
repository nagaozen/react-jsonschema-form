import React from "react";
import {
  getTemplate,
  getUiOptions,
  ArrayFieldTitleProps,
  TemplatesType,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";

/** The `ArrayFieldTitleTemplate` component renders a `TitleFieldTemplate` with an `id` derived from
 * the `idSchema`.
 *
 * @param props - The `ArrayFieldTitleProps` for the component
 */
export default function ArrayFieldTitleTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F = any
>(props: ArrayFieldTitleProps<T, S, F>) {
  const { idSchema, title, schema, uiSchema, required, registry } = props;
  const options = getUiOptions<T, S, F>(uiSchema);
  const { label: displayLabel = true } = options;
  if (!title || !displayLabel) {
    return null;
  }
  const TitleFieldTemplate: TemplatesType<T, S, F>["TitleFieldTemplate"] =
    getTemplate<"TitleFieldTemplate", T, S, F>(
      "TitleFieldTemplate",
      registry,
      options
    );
  const id = `${idSchema.$id}__title`;
  return (
    <TitleFieldTemplate
      id={id}
      title={title}
      required={required}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    />
  );
}