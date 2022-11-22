import React from "react";
import { Controller, Control, RegisterOptions } from "react-hook-form";

type FormContainerType = {
  children: React.ReactNode;
  control: Control<any, any>;
  name: string;
  rules?: Pick<
    RegisterOptions,
    "maxLength" | "minLength" | "validate" | "required"
  >;
};

export const FormContainer = React.memo((props: FormContainerType) => {
  const { children, ...res } = props;

  return (
    <Controller
      {...res}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => <>{children}</>}
    />
  );
});
