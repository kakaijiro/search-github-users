import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { type FormEvent } from "react";
import { useState } from "react";
import type React from "react";
import { toast } from "sonner";

type FormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({ userName, setUserName }: FormProps) {
  const [text, setText] = useState(userName);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast.warning("Oops!", {
        description: "Please enter a username",
      });
      return;
    }
    setUserName(text);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Github Users..."
        className="flex-grow bg-background"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
