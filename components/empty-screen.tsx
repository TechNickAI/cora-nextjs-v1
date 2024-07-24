import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://d1xiic2ql9d7gm.cloudfront.net/logo_cora.png"
            alt="Cora Logo"
            style={{
              height: '45px',
              width: 'auto',
              marginRight: '20px',
              borderRadius: '4px'
            }}
          />
          <div>
            <h1 className="text-lg font-semibold">
              Cora 🤖 + 💙
            </h1>
            <p className="leading-normal text-muted-foreground">
              Elevating AI through Empathy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}