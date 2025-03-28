"use client";

import { Input } from "@/app/components/ui/Input";
import { Label } from "@/app/components/ui/label";
import { Card, CardContent } from "@/app/components/ui/card";

export default function BasicIdentitySection() {
  return (
    <Card className="w-full h-full">
      <CardContent className="grid grid-cols-2 gap-4 p-4">
        <div>
          <Label htmlFor="first_name">First Name</Label>
          <Input id="first_name" placeholder="Enter your first name" />
        </div>

        <div>
          <Label htmlFor="last_name">Last Name</Label>
          <Input id="last_name" placeholder="Enter your last name" />
        </div>

        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Choose a username" />
        </div>

        <div>
          <Label htmlFor="birth_year">Birth Year</Label>
          <Input id="birth_year" type="number" placeholder="e.g. 1995" />
        </div>

        <div>
          <Label htmlFor="height">Height (cm)</Label>
          <Input id="height" type="number" placeholder="e.g. 180" />
        </div>

        <div>
          <Label htmlFor="sex">Sex</Label>
          <Input id="sex" placeholder="e.g. Male, Female, Other" />
        </div>
      </CardContent>
    </Card>
  );
}
