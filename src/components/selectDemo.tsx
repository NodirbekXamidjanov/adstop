import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// selectDemo.tsx
interface SelectDemoProps {
    options: string[]
    onValueChange?: (value: string) => void
}

export function SelectDemo({ options, onValueChange }: SelectDemoProps) {
    return (
        <Select onValueChange={onValueChange} required>
            <SelectTrigger>
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option} value={option}>
                        {option}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}