"use client";

import * as React from "react";
import { format, addDays, subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// ==========================================
// 1. 单日期选择器 DatePicker
// ==========================================
export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = "选择日期...",
  className,
  disabled,
}: DatePickerProps) {
  const [selected, setSelected] = React.useState<Date | undefined>(date);

  React.useEffect(() => {
    setSelected(date);
  }, [date]);

  const handleSelect = (day: Date | undefined) => {
    setSelected(day);
    onDateChange?.(day);
  };

  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        render={
          <Button
            variant="outline"
            className={cn(
              "w-full sm:w-[240px] justify-start text-left font-normal h-9 text-xs rounded-lg",
              !selected && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-3.5 w-3.5" />
            {selected ? (
              format(selected, "yyyy年MM月dd日", { locale: zhCN })
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
}

// ==========================================
// 2. 日期范围选择器 DateRangePicker
// ==========================================
export interface DateRangePickerProps {
  dateRange?: DateRange;
  onRangeChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function DateRangePicker({
  dateRange,
  onRangeChange,
  placeholder = "选择起止日期区间...",
  className,
  disabled,
}: DateRangePickerProps) {
  const [range, setRange] = React.useState<DateRange | undefined>(dateRange);

  React.useEffect(() => {
    setRange(dateRange);
  }, [dateRange]);

  const handleSelect = (nextRange: DateRange | undefined) => {
    setRange(nextRange);
    onRangeChange?.(nextRange);
  };

  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        render={
          <Button
            variant="outline"
            className={cn(
              "w-full sm:w-[280px] justify-start text-left font-normal h-9 text-xs rounded-lg",
              !range?.from && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-3.5 w-3.5" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "yyyy/MM/dd")} - {format(range.to, "yyyy/MM/dd")}
                </>
              ) : (
                format(range.from, "yyyy/MM/dd")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range}
          onSelect={handleSelect}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}

// ==========================================
// 3. 带快捷预设的日期选择器 DatePickerWithPresets
// ==========================================
export function DatePickerWithPresets({
  date,
  onDateChange,
  className,
}: {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  className?: string;
}) {
  const [selected, setSelected] = React.useState<Date | undefined>(date);

  const presets = [
    { label: "今天", getValue: () => new Date() },
    { label: "明天", getValue: () => addDays(new Date(), 1) },
    { label: "3天后", getValue: () => addDays(new Date(), 3) },
    { label: "1周后", getValue: () => addDays(new Date(), 7) },
  ];

  const handleSelect = (d: Date | undefined) => {
    setSelected(d);
    onDateChange?.(d);
  };

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "w-full sm:w-[240px] justify-start text-left font-normal h-9 text-xs rounded-lg",
              !selected && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-3.5 w-3.5" />
            {selected ? (
              format(selected, "yyyy年MM月dd日", { locale: zhCN })
            ) : (
              <span>选择带预设的日期...</span>
            )}
          </Button>
        }
      />
      <PopoverContent className="flex w-auto flex-col p-2 gap-2" align="start">
        <div className="flex gap-1 border-b pb-2">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="ghost"
              size="sm"
              className="text-xs h-7 px-2"
              onClick={() => handleSelect(preset.getValue())}
            >
              {preset.label}
            </Button>
          ))}
        </div>
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
}
