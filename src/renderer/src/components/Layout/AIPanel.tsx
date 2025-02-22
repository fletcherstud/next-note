import { Robot, Lightning, Sparkle, Brain, ArrowRight } from '@phosphor-icons/react'

export function AIPanel(): JSX.Element {
  return (
    <div className="flex h-full flex-col border-l border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      {/* Header */}
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Robot className="text-primary-600 dark:text-primary-400 h-5 w-5" weight="duotone" />
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">AI Assistant</h2>
        </div>
      </div>

      {/* AI Features */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {/* Quick Actions */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700">
                <div className="flex items-center gap-2">
                  <Lightning className="h-4 w-4 text-yellow-500" weight="fill" />
                  <span>Summarize Note</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" weight="regular" />
              </button>
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700">
                <div className="flex items-center gap-2">
                  <Sparkle className="h-4 w-4 text-blue-500" weight="fill" />
                  <span>Improve Writing</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" weight="regular" />
              </button>
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-purple-500" weight="fill" />
                  <span>Generate Ideas</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" weight="regular" />
              </button>
            </div>
          </div>

          {/* Chat Interface Placeholder */}
          <div className="mt-6">
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600 dark:bg-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Select a quick action or start typing to chat with the AI assistant...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
