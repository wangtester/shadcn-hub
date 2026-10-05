"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NativeSelect } from "@/components/ui/native-select";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field";
import { DatePicker, DateRangePicker, DatePickerWithPresets } from "@/components/ui/date-picker";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Search, Mail, AtSign, ChevronDown } from "lucide-react";

export default function FormsPage() {
  const [sliderValue, setSliderValue] = useState<number[]>([40]);
  const [otpValue, setOtpValue] = useState("");

  return (
    <div>
      <PageHeader
        title="表单组件"
        titleEn="Form Components"
        description="包含按钮、输入框、选择器、滑块、开关等全部表单交互组件"
        descriptionEn="Interactive form components including buttons, inputs, selects, sliders, toggles, OTP inputs, and date pickers"
      />

      {/* Button & ButtonGroup */}
      <Section title="Button & ButtonGroup 按钮与按钮组" description="支持多种样式变体、尺寸和组合形态">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button disabled>Disabled</Button>
            <Button variant="outline" size="icon">
              <Bold className="h-4 w-4" />
            </Button>
          </div>
          <div className="pt-2">
            <p className="text-sm font-medium mb-2">ButtonGroup 按钮组：</p>
            <div className="flex flex-wrap gap-4">
              <ButtonGroup>
                <Button variant="outline">左</Button>
                <Button variant="outline">中</Button>
                <Button variant="outline">右</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button>操作</Button>
                <Button size="icon" aria-label="更多操作">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </Section>

      {/* Input & InputGroup */}
      <Section title="Input & InputGroup 输入框组合" description="标准输入框与带图标/按钮的增强组合框">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="text-input">基础输入框</Label>
            <Input id="text-input" placeholder="请输入文本..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="search-input">InputGroup 前置图标</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Search className="h-4 w-4" />
              </InputGroupAddon>
              <InputGroupInput id="search-input" placeholder="搜索资源..." />
            </InputGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-addon">InputGroup 后置按钮</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <AtSign className="h-4 w-4" />
              </InputGroupAddon>
              <InputGroupInput id="email-addon" placeholder="用户名" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="ghost" size="sm">检测</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-input">禁用状态</Label>
            <Input id="disabled-input" disabled placeholder="此输入框已禁用" />
          </div>
        </div>
      </Section>

      {/* Field 表单字段包装 */}
      <Section title="Field 字段控制" description="集成 Label、提示信息与校验错误的规范表单项">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field>
            <FieldLabel>用户名</FieldLabel>
            <Input placeholder="输入唯一用户名" />
            <FieldDescription>这是您在平台的公开昵称</FieldDescription>
          </Field>
          <Field>
            <FieldLabel>电子邮箱</FieldLabel>
            <Input defaultValue="invalid-email" aria-invalid="true" />
            <FieldError>请输入有效的邮箱地址</FieldError>
          </Field>
        </div>
      </Section>

      {/* Textarea */}
      <Section title="Textarea 文本域" description="多行文本输入组件">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="textarea1">自我介绍</Label>
            <Textarea id="textarea1" placeholder="请简要介绍你自己..." rows={4} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="textarea2">只读备注</Label>
            <Textarea id="textarea2" disabled value="系统自动生成的记录，不可修改。" rows={4} />
          </div>
        </div>
      </Section>

      {/* Select & NativeSelect */}
      <Section title="Select & NativeSelect 下拉选择" description="富文本下拉选择与移动端原生选择器">
        <div className="flex flex-wrap gap-6">
          <div className="space-y-2 w-56">
            <Label>标准 Select</Label>
            <Select defaultValue="react">
              <SelectTrigger>
                <SelectValue placeholder="选择技术栈" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue.js</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 w-56">
            <Label>NativeSelect 原生选择</Label>
            <NativeSelect defaultValue="shanghai">
              <option value="beijing">北京 (Beijing)</option>
              <option value="shanghai">上海 (Shanghai)</option>
              <option value="shenzhen">深圳 (Shenzhen)</option>
              <option value="hangzhou">杭州 (Hangzhou)</option>
            </NativeSelect>
          </div>
        </div>
      </Section>

      {/* Checkbox & RadioGroup */}
      <Section title="Checkbox & RadioGroup 勾选与单选" description="多选框与单选按钮组">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label className="text-base font-semibold">Checkbox 复选框</Label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="c1" defaultChecked />
                <Label htmlFor="c1">接受服务条款与隐私政策</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="c2" />
                <Label htmlFor="c2">订阅每周技术周刊</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="c3" disabled defaultChecked />
                <Label htmlFor="c3" className="text-muted-foreground">已开启双重认证 (锁定)</Label>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <Label className="text-base font-semibold">RadioGroup 单选组</Label>
            <RadioGroup defaultValue="team">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="r-personal" />
                <Label htmlFor="r-personal">个人开发者计划</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="team" id="r-team" />
                <Label htmlFor="r-team">团队协作计划</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enterprise" id="r-enterprise" />
                <Label htmlFor="r-enterprise">企业专有计划</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Section>

      {/* Switch & Slider */}
      <Section title="Switch & Slider 开关与滑块" description="状态切换与数值区间调节">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <Label className="text-base font-semibold">Switch 状态开关</Label>
            <div className="flex items-center space-x-3">
              <Switch id="s1" defaultChecked />
              <Label htmlFor="s1">启用实时通知推送</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Switch id="s2" />
              <Label htmlFor="s2">自动保存草稿</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Switch id="s3" disabled />
              <Label htmlFor="s3" className="text-muted-foreground">硬件加速 (不可用)</Label>
            </div>
          </div>
          <div className="space-y-4">
            <Label className="text-base font-semibold">Slider 数值滑块: {sliderValue[0]}%</Label>
            <Slider
              value={sliderValue}
              onValueChange={(val) => setSliderValue(Array.isArray(val) ? [...val] : [Number(val)])}
              max={100}
              step={1}
            />
            <div className="pt-2">
              <Label className="text-sm text-muted-foreground">亮度范围调节 (禁用状态)</Label>
              <Slider defaultValue={[65]} disabled className="mt-2" />
            </div>
          </div>
        </div>
      </Section>

      {/* Toggle & ToggleGroup */}
      <Section title="Toggle & ToggleGroup 切换开关组" description="富文本格式切换与排版布局控制">
        <div className="flex flex-wrap gap-8 items-start">
          <div className="space-y-2">
            <Label>单个 Toggle</Label>
            <div className="flex gap-2">
              <Toggle aria-label="粗体">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="斜体" defaultPressed>
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="下划线" variant="outline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>
          <div className="space-y-2">
            <Label>单选 ToggleGroup (对齐)</Label>
            <ToggleGroup defaultValue={["center"]}>
              <ToggleGroupItem value="left" aria-label="左对齐">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="居中对齐">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="右对齐">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <Label>多选 ToggleGroup (样式)</Label>
            <ToggleGroup multiple defaultValue={["bold"]}>
              <ToggleGroupItem value="bold" aria-label="粗体">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="斜体">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="下划线">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </Section>

      {/* InputOTP */}
      <Section title="InputOTP 验证码输入" description="支持自动分割、按格聚焦的高灵敏度 OTP 输入">
        <div className="space-y-3">
          <Label>请输入短信验证码：</Label>
          <InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          {otpValue && <p className="text-sm text-muted-foreground">当前值: <span className="font-mono font-medium text-foreground">{otpValue}</span></p>}
        </div>
      </Section>

      {/* DatePicker */}
      <Section
        title="DatePicker 日期选择与范围预设"
        description="基于 Popover 与 Calendar 复合架构封装的高灵活性日期选择：支持单日期、起止区间范围选择与快捷预设"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="space-y-2">
            <Label>单日期拾取 (Single Date)</Label>
            <DatePicker />
            <p className="text-[11px] text-muted-foreground">标准单日点选，内置中文本地化格式</p>
          </div>

          <div className="space-y-2">
            <Label>日期区间选择 (Date Range)</Label>
            <DateRangePicker />
            <p className="text-[11px] text-muted-foreground">双月份跨越式起止区间选择</p>
          </div>

          <div className="space-y-2">
            <Label>快捷预设拾取 (Presets)</Label>
            <DatePickerWithPresets />
            <p className="text-[11px] text-muted-foreground">提供今天、明天、一周后等快捷按钮</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
