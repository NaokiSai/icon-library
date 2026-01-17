import { getStoryContext, type TestRunnerConfig } from "@storybook/test-runner";
import path from "path";
import { screenshot } from "storycap-testrun";

const config: TestRunnerConfig = {
  async preVisit(page, context) {
    // ビューポートの設定
    // 必要があればここで出し分けする
    page.setViewportSize({ width: 375, height: 812 });
  },
  async postVisit(page, context) {
    // storycap-testrunで提供されるスクリーンショット実行関数
    await screenshot(page, context, {
      // flaky対策のオプション
      flakiness: {
        metrics: {
          enabled: true,
          retries: 1000, // メトリクス監視中の再試行回数。
        },
        retake: {
          enabled: true,
          interval: 100, // リテイクの周期。
          retries: 10, // リテイクの回数。
        },
      },
    });
  },
  tags: {
    // tags: ["skip"]を持つstoryはスクリーンショット（storybook-testrunnerのテスト）をスキップする
    // 重すぎてタイムアウトするものなどを指定するのが良いかも
    skip: ["skip"],
  },
};

export default config;

