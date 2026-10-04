"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";

export interface DataTableColumn<T> {
  key: string;
  header: string | React.ReactNode;
  accessor?: (item: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  pageSize?: number;
  searchPlaceholder?: string;
  searchKey?: keyof T;
  className?: string;
  enableSelection?: boolean;
  onSelectionChange?: (selectedItems: T[]) => void;
  getRowId?: (item: T, index: number) => string | number;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pageSize = 5,
  searchPlaceholder = "搜索记录...",
  searchKey,
  className,
  enableSelection = true,
  onSelectionChange,
  getRowId = (_, i) => i,
}: DataTableProps<T>) {
  const [filterQuery, setFilterQuery] = React.useState("");
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedIds, setSelectedIds] = React.useState<Set<string | number>>(new Set());

  // 1. 过滤数据
  const filteredData = React.useMemo(() => {
    if (!filterQuery.trim()) return data;
    const lower = filterQuery.toLowerCase();
    return data.filter((item) => {
      if (searchKey) {
        return String(item[searchKey]).toLowerCase().includes(lower);
      }
      return Object.values(item).some((val) =>
        String(val).toLowerCase().includes(lower)
      );
    });
  }, [data, filterQuery, searchKey]);

  // 2. 排序数据
  const sortedData = React.useMemo(() => {
    if (!sortKey) return filteredData;
    return [...filteredData].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (valA === valB) return 0;
      if (valA == null) return 1;
      if (valB == null) return -1;
      const comparison = valA < valB ? -1 : 1;
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [filteredData, sortKey, sortDirection]);

  // 3. 分页处理
  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const validPage = Math.min(currentPage, totalPages);
  const paginatedData = React.useMemo(() => {
    const start = (validPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, validPage, pageSize]);

  // 切换排序
  const handleSort = (key: string) => {
    if (sortKey === key) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortKey(null);
        setSortDirection("asc");
      }
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  // 选中处理
  const handleSelectAll = (checked: boolean) => {
    const next = new Set<string | number>();
    if (checked) {
      paginatedData.forEach((item, idx) => {
        next.add(getRowId(item, idx));
      });
    }
    setSelectedIds(next);
    onSelectionChange?.(
      paginatedData.filter((item, idx) => next.has(getRowId(item, idx)))
    );
  };

  const handleSelectRow = (id: string | number, checked: boolean, item: T) => {
    const next = new Set(selectedIds);
    if (checked) {
      next.add(id);
    } else {
      next.delete(id);
    }
    setSelectedIds(next);
    onSelectionChange?.(data.filter((d, i) => next.has(getRowId(d, i))));
  };

  const allSelectedOnPage =
    paginatedData.length > 0 &&
    paginatedData.every((item, idx) => selectedIds.has(getRowId(item, idx)));

  return (
    <div className={cn("space-y-3.5", className)}>
      {/* 顶部工具栏：搜索与计数 */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            value={filterQuery}
            onChange={(e) => {
              setFilterQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder={searchPlaceholder}
            className="pl-8 h-8 text-xs rounded-lg"
          />
        </div>
        <div className="text-xs text-muted-foreground flex items-center gap-2 self-end sm:self-auto font-mono">
          <span>共 {filteredData.length} 条数据</span>
          {enableSelection && selectedIds.size > 0 && (
            <span className="text-primary font-semibold">
              · 已选 {selectedIds.size} 项
            </span>
          )}
        </div>
      </div>

      {/* 表格主体 */}
      <div className="rounded-xl border bg-card/50 overflow-hidden shadow-2xs">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40">
              {enableSelection && (
                <TableHead className="w-10 px-3">
                  <Checkbox
                    checked={allSelectedOnPage}
                    onCheckedChange={(checked) => handleSelectAll(Boolean(checked))}
                    aria-label="全选本页"
                  />
                </TableHead>
              )}
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className={cn(
                    "text-xs font-semibold select-none",
                    col.sortable && "cursor-pointer hover:text-foreground",
                    col.className
                  )}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{col.header}</span>
                    {col.sortable && (
                      <span className="text-muted-foreground/60">
                        {sortKey === col.key ? (
                          sortDirection === "asc" ? (
                            <ArrowUp className="h-3 w-3 text-primary" />
                          ) : (
                            <ArrowDown className="h-3 w-3 text-primary" />
                          )
                        ) : (
                          <ArrowUpDown className="h-3 w-3" />
                        )}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (enableSelection ? 1 : 0)}
                  className="h-24 text-center text-xs text-muted-foreground"
                >
                  未查找到匹配的数据项
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, idx) => {
                const id = getRowId(item, idx);
                const isSelected = selectedIds.has(id);
                return (
                  <TableRow
                    key={id}
                    data-state={isSelected ? "selected" : undefined}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    {enableSelection && (
                      <TableCell className="w-10 px-3">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={(checked) =>
                            handleSelectRow(id, Boolean(checked), item)
                          }
                          aria-label={`选择行 ${idx + 1}`}
                        />
                      </TableCell>
                    )}
                    {columns.map((col) => (
                      <TableCell key={col.key} className={cn("text-xs", col.className)}>
                        {col.accessor ? col.accessor(item) : item[col.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* 底部翻页控制器 */}
      <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
        <div>
          第 <span className="font-semibold text-foreground">{validPage}</span> /{" "}
          <span className="font-semibold text-foreground">{totalPages}</span> 页
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => setCurrentPage(1)}
            disabled={validPage <= 1}
            aria-label="首页"
          >
            <ChevronsLeft className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={validPage <= 1}
            aria-label="上一页"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={validPage >= totalPages}
            aria-label="下一页"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => setCurrentPage(totalPages)}
            disabled={validPage >= totalPages}
            aria-label="末页"
          >
            <ChevronsRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
