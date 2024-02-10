"use client";
import { generateUniqueId } from "@/utils/generateUniquerId";
import { removeData } from "@/utils/removeData";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
  type dataType = {
    id?: string;
    todo: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataType>();
  const [data, setData] = useState<dataType[]>([]);

  const onSubmit: SubmitHandler<dataType> = (formData, e) => {
    e?.preventDefault();
    setData((prevData) => [
      ...prevData,
      { id: generateUniqueId(), todo: formData.todo },
    ]);
    e?.target.reset(); // Reset form after submission
  };
  const stringForLabelInput = "What do you want to do today?";
  return (
    <div className="flex flex-col  justify-center items-center gap-8">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="font-semibold text-slate-500">
          {stringForLabelInput}
        </label>
        <div>
          <input
            className="px-7 py-5 bg-slate-50"
            placeholder="Buy Milk"
            {...register("todo", { required: true })}
          />
          <button className="px-7 py-5 bg-red-200" type="submit">
            Add
          </button>
        </div>
      </form>
      <div className=" w-[500px]  max-h-[300px] overflow-auto  bg-blue-200">
        <ul className="bg-red-100 justify-start overflow-auto">
          {data.map((item) => (
            <li
              className="flex gap-2 px-7 py-5 bg-slate-50 items-center "
              key={item.id}
            >
              <button
                type="checkbox"
                className="ml-2 px-4 py-3 rounded-md bg-red-300 text-white"
                onClick={() => removeData(item.id, setData)}
                value={"X"}
              >
                X
              </button>
              {item.todo}
            </li>
          ))}
        </ul>
      </div>
      <p>Task Left {data.length}</p>
    </div>
  );
}
