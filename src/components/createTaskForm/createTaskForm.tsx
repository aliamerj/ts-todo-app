import React, { FC, ReactElement, useState } from "react";

export const CreateTaskForm: FC = (): ReactElement => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
    priority: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <form onSubmit={() => {}} className="w-3/4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="mt-1 px-3 py-2 bg-transparent border border-gray-400 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Task Tilte"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Description
          </label>
          <textarea
            name="description"
            className="mt-1 px-3 py-2 bg-transparent border border-gray-400 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 resize-none"
            placeholder="write some description to your task"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Due Date
          </label>
          <input
            type="datetime-local"
            name="Date"
            className="mt-1 px-3 py-2 bg-transparent border border-gray-400 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Task Tilte"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Status
            </label>
            <select
              name="status"
              className="mt-1 px-3 py-2 bg-transparent border border-gray-400 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option className="bg-gray-900" value="" disabled>
                Select status
              </option>
              <option className="bg-gray-900" value="todo">
                To Do
              </option>
              <option className="bg-gray-900" value="in-progress">
                In Progress
              </option>
              <option className="bg-gray-900" value="done">
                Done
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Priority
            </label>
            <select
              name="priority"
              className=" mt-1 px-3 py-2 bg-transparent border border-gray-400 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option className="bg-gray-900" value="" disabled>
                Select priority
              </option>
              <option className="bg-gray-900" value="low">
                Low
              </option>
              <option className="bg-gray-900" value="medium">
                Medium
              </option>
              <option className="bg-gray-900" value="high">
                High
              </option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
