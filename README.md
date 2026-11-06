# Sortly · Markham — iPhone App

将现有 React Web 应用打包为 iOS App，使用 Capacitor 原生容器和 iPhone 系统相机、相册。保留 Web 版本。

## 用 iPhone Safari 测试网页版

测试地址：https://mikelys.github.io/Trashtype/

1. 用 iPhone Safari 打开链接，点击 **Scan an item** 拍照，或 **Or upload a photo** 选择照片。
2. 第一次识别需要联网下载模型。查看候选物品，确认名称和材质，再查看推荐垃圾桶。
3. 也可搜索 `coffee cup`（纸杯，蓝桶）或 `banana`（香蕉皮，绿桶）。
4. Safari 分享菜单 → 添加到主屏幕，即可通过桌面图标打开。

网页版使用系统文件选择器的相机入口；原生相机插件的测试需要安装 iOS App。分类历史仅存于当前浏览器/主屏幕应用，二者可能使用不同存储。照片不会上传。

网页由 `gh-pages` 分支发布，`main` 保留源码。更新源码后运行 `npm run build`，将 `dist` 的内容发布至 `gh-pages` 根目录，并保留 `.nojekyll`。Vite 使用相对资源路径，同时兼容 `/Trashtype/` 子目录和 iOS 的本地资源。

## 在 iPhone 上运行

需要 Mac、Xcode 26 或更新版本、Node.js 22 或更新版本，以及用于签名的 Apple 账户。最低支持 iOS 15。工程使用 Swift Package Manager，无需 CocoaPods。

```sh
npm ci
npm run ios:sync
npm run ios:open
```

1. Xcode 打开 `ios/App/App.xcodeproj`，选择 App target。
2. 在 Signing & Capabilities 中选择你的 Team，启用 Automatically manage signing。
3. 将 Bundle Identifier `ca.sortly.markham` 改成你的唯一标识；同时更新 `capacitor.config.json` 的 appId。
4. 连接 iPhone，按系统提示信任电脑并启用 Developer Mode（如系统要求）。选择这部 iPhone，点击 Run。
5. 首次拍照允许相机权限。权限被拒绝后，可以在 iPhone 设置中更改，也可以直接搜索物品。

源码 ZIP 不能直接安装。TestFlight / App Store 分发还需要 Apple Developer Program 账户、签名和 App Store Connect 配置；本仓库不包含签名证书或安装包。

参考：[Capacitor iOS 环境要求](https://capacitorjs.com/docs/ios)、[系统相机权限](https://capacitorjs.com/docs/apis/camera)。

## 功能与限制

- 系统相机拍照，或从照片库选择照片；不自动保存到相册。
- MobileNet 在设备端提供候选物品，用户确认名称和材质后显示分类。
- Markham 蓝桶、绿桶、透明垃圾袋以及特殊物品投放点指南。
- 手机底部导航、安全区域布局、不会触发 Safari 自动放大的搜索框。
- 本地搜索、物品详情、可清空的本地历史。

识别模型首次使用需要联网下载；它是通用物体模型，不能可靠区分所有材质或垃圾。识别失败时提供手动搜索，未知物品链接到官方指南。相片不会上传，识别不保证分类正确。内置有限物品目录，不覆盖全部垃圾；公寓的具体收集方式可能不同。此应用与 Markham 市政府无隶属关系。

## Web 开发与验证

```sh
npm run dev
npm run build
npm run test:ui
```

`test:ui` 会自行启动本地服务；需要 Chromium。Linux 可设置 `CHROMIUM_PATH=/usr/bin/chromium`，或先运行 `npx playwright install chromium` 安装浏览器。

每次修改 Web 代码后，运行 `npm run ios:sync` 再用 Xcode 构建。`dist` 和 iOS 工程内的 Web 资源是生成文件，未纳入版本控制。

当前 Linux 环境可验证 Web 构建、iOS 资源同步以及浏览器中的手机流程，不能运行 Xcode 或真实 iPhone。发布前需实机验证拍照、选择相册、取消操作、拒绝权限、首次模型下载和断网搜索。

## GitHub 上传

目标仓库：https://github.com/mikelys/Trashtype

在已登录目标 GitHub 账户且具有写入权限的电脑上，在源码目录执行以下命令上传到空仓库：

```sh
git init
git add .
git commit -m "Add Sortly iPhone app with native camera"
git branch -M main
gh auth login
git remote add origin https://github.com/mikelys/Trashtype.git
git push -u origin main
```

如果本地已设置 origin，请先核对其地址。邮箱地址不能用作 GitHub 仓库地址。不要提交访问令牌、证书、签名文件或个人配置。

## 本地分类依据

原目录于 2026-11-05 整理，本次于 2026-11-06 复核蓝桶规则：

- https://www.markham.ca/neighbourhood-services/recycling-garbage/blue-box
- https://www.markham.ca/neighbourhood-services/recycling-garbage/green-bin
- https://www.markham.ca/neighbourhood-services/recycling-garbage/what-goes-where
- https://www.markham.ca/neighbourhood-services/recycling-garbage/recycling-depots-drop-centres

纸质饮料杯采用蓝桶页面明确的 2026 更新，市政府旧版绿桶页面可能保留不同指导。
