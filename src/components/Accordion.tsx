"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export function Accordion({ items }: { items: AccordionItemProps[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-2.5">
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          className="border border-border-color bg-card-bg hover:border-neutral-700 data-[state=open]:border-brand-red/50 transition-colors duration-200"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between px-5 py-3.5 text-left font-mono text-xs sm:text-sm font-bold text-foreground transition-all hover:text-brand-red focus:outline-none cursor-pointer gap-3">
              <span>{item.trigger}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand-red" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden text-xs sm:text-sm text-text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-5 pb-3.5 pt-0 leading-relaxed font-sans text-xs sm:text-sm text-text-muted/90">{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

