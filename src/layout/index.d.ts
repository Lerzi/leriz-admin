import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider';
import type { LoadingBarApiInjection } from 'naive-ui/lib/loading-bar/src/LoadingBarProvider';

declare global {
  interface Window {
    $message: MessageApiInjection;
    $loadingBar: LoadingBarApiInjection;
  }
}
