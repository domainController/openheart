
"use client";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

const BasicInfoSidebar = () => {
  return (
    <div className="w-full flex flex-col space-y-2 text-sm text-foreground/80">
      <div className="flex flex-col">
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" placeholder="Enter your first name" className="border-none bg-transparent focus:outline-none" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" placeholder="Enter your last name" className="border-none bg-transparent focus:outline-none" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Choose a username" className="border-none bg-transparent focus:outline-none" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="birthYear">Birth Year</Label>
        <Input id="birthYear" placeholder="e.g. 1995" className="border-none bg-transparent focus:outline-none" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="height">Height (cm)</Label>
        <Input id="height" placeholder="e.g. 180" className="border-none bg-transparent focus:outline-none" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="sex">Sex</Label>
        <Input id="sex" placeholder="e.g. Male, Female, Other" className="border-none bg-transparent focus:outline-none" />
      </div>
    </div>
  );
};

export default BasicInfoSidebar;
