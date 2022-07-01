import router from '@/router'
import localStorage from '@/utils/local-storage'
import { STORAGE_TOKEN_KEY } from '@/store/mutation-type'
import { allowList, loginRoutePath } from '../define-meta'

router.beforeEach(async to => {
  const userToken = localStorage.get(STORAGE_TOKEN_KEY)

  // token check
  if (!userToken) {
    // 白名单路由列表检查
    if (allowList.includes(to.name as string)) {
      return true;
    }

    if (to.fullPath !== loginRoutePath) {
      // 未登录，进入到登录页
      return {
        path: loginRoutePath,
        replace: true,
        // 登录后跳转到之前页面，如不需要，直接删除 query 即可
        query: { redirect: encodeURIComponent(to.fullPath) },
      }
    }
    return to
  }
})

router.afterEach(() => {
  // to do
})