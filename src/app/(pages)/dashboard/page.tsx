'use client'

// import { db } from "@/db";
import { getUserEmail } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Download,
  Flower2,
  Map,
  Book,
  Hand,
  LayoutList
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormDrawer } from '@/components/form-drawer';
import config from "@/components/graph/config";
import initialGraphData from "@/components/graph/initialGraphData";
import { Graph } from 'react-d3-graph';
import GraphPage from '@/components/graph/graph';
import ListPage from '@/components/list/ListPage';
import GraphWithVoronoi from "@/components/graph/GraphWithVoronoi";
// import Slide from "@/components/Slide";

export default async function page() {
  const [isKnowledgeGraph, setIsKnowledgeGraph] = useState(true);

  return (
    <div className="grid h-screen w-full px-6 overflow-hidden">
      <div className="flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">知識圖譜</h1>
          {/* Form-small screen/Drawer */}
          <FormDrawer />
          {/* Output Button */}
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-auto gap-1.5 text-sm">
              <Button
                variant="outline"
                size="sm"
                className="ml-auto gap-1.5 text-sm"
              >
                <Download className="size-3.5" />
                輸出
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>圖檔(.jpg)</DropdownMenuItem>
              <DropdownMenuItem>圖譜(.owl)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Button 
            className="flex h-9" 
            variant="outline" 
            onClick={toggleSlideOver}
          >
            <LayoutList />
          </Button> */}
        </header>
        {/* Main Page */}
        <main className="relative grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Form */}
          <div className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0">
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
          </div>
          {/* knowledge Graph Canvas */}
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/80 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:text-accent-foreground duration-300" onClick={()=>setIsKnowledgeGraph(!isKnowledgeGraph)}>
              { 
                isKnowledgeGraph ?
                  ("knowledge graph"):
                  ("description lists")
              }
            </Badge>
            <div className="flex-1">
              {/* <GraphWithVoronoi graphData={initialGraphData} graphConfig={config}  /> */}
              {/* <Graph   
                id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
                data={graphData} config={graphConfig}
              /> */}
              { 
                isKnowledgeGraph ?
                <GraphPage data={initialGraphData} config={config} />:
                <ListPage />
              }
            </div>
          </div>
        </main>
        {/* <Slide open={isOpen} toggleSlideOver={toggleSlideOver} /> */}
      </div>
    </div>
  );
}