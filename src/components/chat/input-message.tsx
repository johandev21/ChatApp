import { useRef, useEffect } from "react"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Image, Send, MessageSquare } from "lucide-react"

export default function InputMessage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const inputContainerRef = useRef<HTMLDivElement>(null)

  const updateInputHeight = () => {
    const el = textareaRef.current
    if (el) {
      el.style.height = "auto"
      el.style.height = `${Math.min(el.scrollHeight, 160)}px`
    }
    // Update the CSS variable on the body
    if (inputContainerRef.current) {
      document.documentElement.style.setProperty('--input-height', `${inputContainerRef.current.offsetHeight}px`);
    }
  }

  useEffect(() => {
    // Initial height calculation
    updateInputHeight();
  }, []);

  return (
    <div ref={inputContainerRef} className="flex items-end gap-2">
      {/* Input */}
      <div className="relative flex-1">
        <MessageSquare className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Textarea
          ref={textareaRef}
          onInput={updateInputHeight}
          placeholder="Type a message"
          className="pl-8 min-h-[2rem] max-h-40 resize-none overflow-y-auto rounded-xl border-muted bg-muted/30"
        />
      </div>

      {/* Actions */}
      <Button size="icon" variant="ghost" className="rounded-full">
        <Image className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost" className="rounded-full">
        <Send className="h-5 w-5" />
      </Button>
    </div>
  )
}