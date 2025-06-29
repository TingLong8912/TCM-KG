"use client";

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronsUp,
  ChevronsDown,
  Search

} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Download,
  Flower2,
  Map,
  Book,
  Hand,
  LayoutList
} from "lucide-react"

export function FormDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost" size="icon"
          className="md:hidden focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          onClick={() => setIsOpen(true)}
        >
          {isOpen ?
            <ChevronsDown className="size-4" />
            : <ChevronsUp className="size-4" />
          }
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>檢索</DrawerTitle>
          <DrawerDescription>

          </DrawerDescription>
        </DrawerHeader>

        <form className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <div className="grid gap-3">
              <Label htmlFor="search">快速搜尋</Label>
              <Input
                id="search"
                placeholder="請輸入中藥名稱"
              />
            </div>
          </fieldset>
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <div className="grid gap-3">
              <Label htmlFor="role">欄位檢索</Label>
              <Select>
                <SelectTrigger
                  id="model"
                  className="items-start [&_[data-description]]:hidden"
                >
                  <SelectValue placeholder="選擇檢索類別" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plant_part">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Flower2 className="size-5" />
                      <div className="grid gap-0.5">
                        <p className="font-medium text-foreground">
                          植物部分
                        </p>
                        <p className="text-xs" data-description>
                          種子、莖、葉、花等等
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="region">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Map className="size-5" />
                      <div className="grid gap-0.5">
                        <p className="font-medium text-foreground">
                          地點
                        </p>
                        <p className="text-xs" data-description>
                          廣東、廣西等等
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="provenance">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Book className="size-5" />
                      <div className="grid gap-0.5">
                        <p className="font-medium text-foreground">
                          出處
                        </p>
                        <p className="text-xs" data-description>
                          本草綱目拾遺、中藥大辭典等等
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="usage">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Hand className="size-5" />
                      <div className="grid gap-0.5">
                        <p className="font-medium text-foreground">
                          外觀及功用
                        </p>
                        <p className="text-xs" data-description>
                          苦、澀、治感冒等等
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Input
                id="search_keywords"
                placeholder="請輸入欲查詢之關鍵字"
              />
            </div>
          </fieldset>
        </form>
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <div className="grid gap-3">
            <Label htmlFor="lists">列表檢索</Label>
          </div>
        </fieldset>
      </DrawerContent>
    </Drawer>
  );
}
