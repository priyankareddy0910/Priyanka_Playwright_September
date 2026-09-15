import { Locator, expect } from '@playwright/test';

export class CheckboxUtils {

  static async checkCheckbox(locator: Locator): Promise<void> {
    if (!(await locator.isChecked())) {
      await locator.check();
    }
  }

  static async uncheckCheckbox(locator: Locator): Promise<void> {
    if (await locator.isChecked()) {
      await locator.uncheck();
    }
  }

  static async checkAll(groupLocator: Locator): Promise<void> {
    const boxes = await groupLocator.all();
    for (const box of boxes) {
      await CheckboxUtils.checkCheckbox(box);
      await expect(box).toBeChecked();
    }
  }
}
