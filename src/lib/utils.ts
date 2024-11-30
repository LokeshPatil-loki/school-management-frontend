import { useUser } from "@clerk/nextjs";

export function removeEmptyProperties(object: { [key: string]: any }) {
  const newObject = { ...object };
  for (let key in newObject) {
    if (newObject[key] === undefined || newObject[key] === null) {
      delete newObject[key];
    }
  }
  return newObject;
}

export function formatDate(value: string | Date) {
  if (value instanceof Date) {
    return new Intl.DateTimeFormat().format(value);
  }
  return new Intl.DateTimeFormat().format(new Date(value));
}

export function formatTime(value: string | Date) {
  if (!(value instanceof Date)) {
    value = new Date(value);
  }
  return value.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export const getRole = () => {
  const role = useUser().user?.publicMetadata?.role as string;
  return role;
};
