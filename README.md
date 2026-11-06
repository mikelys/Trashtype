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
- MobileCLIP 在设备端建议清晰的中英文物品名称，自动填入查询框；确认实际材质和状态后显示分类。
- Markham 蓝桶、绿桶、透明垃圾袋以及特殊物品投放点指南。
- 手机底部导航、安全区域布局、不会触发 Safari 自动放大的搜索框。
- 本地搜索、物品详情、可清空的本地历史。

识别模型首次使用需要联网下载约 45.5 MB 图像权重及运行时资源，建议使用 Wi-Fi。文字特征已预计算，手机无需下载或运行文本模型；图像模型在 Web Worker 中运行。当前支持 28 类物品名称、78 种外观描述及 34 个分类条目。模型不能可靠区分所有材质或垃圾。识别失败时提供手动搜索，未知物品链接到官方指南。支持中文、英文、复数和简单拼写纠错。相片不会上传，识别不保证分类正确。内置有限物品目录，不覆盖全部垃圾；公寓的具体收集方式可能不同。此应用与 Markham 市政府无隶属关系。

## Web 开发与验证

Linux 安装依赖可使用 `ONNXRUNTIME_NODE_INSTALL_CUDA=skip npm ci`，避免下载本应用不需要的 CUDA 组件。

```sh
npm run dev
npm run build
npm test
npm run test:ui
```

`test:ui` 会自行启动本地服务；需要 Chromium。Linux 可设置 `CHROMIUM_PATH=/usr/bin/chromium`，或先运行 `npx playwright install chromium` 安装浏览器。

每次修改 Web 代码后，运行 `npm run ios:sync` 再用 Xcode 构建。`dist` 和 iOS 工程内的 Web 资源是生成文件，未纳入版本控制。

当前 Linux 环境可验证 Web 构建、iOS 资源同步以及浏览器中的手机流程，不能运行 Xcode 或真实 iPhone。发布前需实机验证拍照、选择相册、取消操作、拒绝权限、首次模型下载和断网搜索。

## 金属垃圾桶与内衬袋

支持搜索“垃圾桶”“不锈钢垃圾桶”“stainless steel trash can”。结果针对桶本身，显示“废金属回收”，并链接到 [Markham 金属物品官方说明](https://www.markham.ca/neighbourhood-services/recycling-garbage/appliances-metal-items)：先取出衬袋和垃圾，小型金属物品送 Recycling Depot，大型金属物品拨 905-477-5530 预约免费收集。

照片中有桶和袋子时，相关识别结果提供“垃圾桶本身 / 塑料内衬袋”选择；桶本身需要确认金属材质。模型可能仍先认出袋子，选择目标可以纠正意图；尚未用用户原照片验证。

## 识别模型与验证

- 模型：[MobileCLIP S0 ONNX](https://huggingface.co/Xenova/mobileclip_s0)，[Apple 原始项目](https://github.com/apple/ml-mobileclip)。许可证位于 `public/MOBILECLIP-LICENSE.txt`。
- 浏览器仅下载图像模型，通过本地预计算的多个外观描述向量给候选物品排序；排序分值不等于经过验证的识别准确率，界面不显示虚假的准确率百分比。
- 物品命名与分类分开：例如“杯子”还需选择纸杯、塑料杯、陶瓷杯或玻璃杯；披萨盒还需确认油污状态。未知图片不会显示随机目录作为识别结果。
- 修改 `src/recognition-catalog.js` 后，运行 `node scripts/build-label-embeddings.mjs` 重新生成 `public/recognition-labels.json`。可传入已下载模型目录以离线生成；需要 CPU，无需 CUDA。
- 已验证中文/英文搜索、材质与状态分流、模型下载失败和未知图片处理；另用 TACO 数据集的瓶子、饮料罐、纸杯、电池、薯片袋、披萨盒标注裁剪图检查命名，并在 Chromium 中运行真实 Worker 推理。样本很少，不能据此声明整体准确率；复杂背景、遮挡和 iPhone 实机表现仍需试用。
- [TACO 数据集来源](https://github.com/pedropro/TACO)，评估照片未包含在仓库中。

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
