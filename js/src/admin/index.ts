import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

export default class FilterSettingsPage extends ExtensionPage {
  oninit(vnode: any) {
    super.oninit(vnode);
  }

  content() {
    return m('div', { className: 'FilterSettingsPage' }, [
      m('div', { className: 'container' }, [
        m('form', [
          m('h2', app.translator.trans('fof-filter.admin.title')),
          this.buildSettingComponent({
            type: 'textarea',
            rows: 6,
            setting: 'fof-filter.words',
            label: app.translator.trans('fof-filter.admin.filter_label'),
            placeholder: app.translator.trans('fof-filter.admin.input.placeholder'),
            help: app.translator.trans('fof-filter.admin.bad_words_help'),
          }),
          m('hr'),
          m('h2', app.translator.trans('fof-filter.admin.auto_merge_title')),
          this.buildSettingComponent({
            type: 'boolean',
            setting: 'fof-filter.autoMergePosts',
            label: app.translator.trans('fof-filter.admin.input.switch.merge'),
          }),
          this.buildSettingComponent({
            type: 'number',
            setting: 'fof-filter.cooldown',
            label: app.translator.trans('fof-filter.admin.cooldownLabel'),
            help: app.translator.trans('fof-filter.admin.help2'),
            min: 0,
          }),
          m('hr'),
          m('h2', app.translator.trans('fof-filter.admin.input.email_label')),
          this.buildSettingComponent({
            type: 'string',
            setting: 'fof-filter.flaggedSubject',
            label: app.translator.trans('fof-filter.admin.input.email_subject'),
            placeholder: app.translator.trans('fof-filter.admin.email.default_subject'),
          }),
          this.buildSettingComponent({
            type: 'textarea',
            rows: 4,
            setting: 'fof-filter.flaggedEmail',
            label: app.translator.trans('fof-filter.admin.input.email_body'),
            help: app.translator.trans('fof-filter.admin.email_help'),
            placeholder: app.translator.trans('fof-filter.admin.email.default_text'),
          }),
          this.buildSettingComponent({
            type: 'boolean',
            setting: 'fof-filter.emailWhenFlagged',
            label: app.translator.trans('fof-filter.admin.input.switch.email'),
          }),
          m('hr'),
          m('h2', '阿里云内容安全检测'),
          this.buildSettingComponent({
            type: 'boolean',
            setting: 'hamcq-filter.aliyun-content-check',
            label: '开启阿里云内容安全检测',
          }),
          this.buildSettingComponent({
            type: 'string',
            setting: 'hamcq-filter.aliyun-content-check.access_id',
            label: 'ALIBABA_CLOUD_ACCESS_KEY_ID',
          }),
          this.buildSettingComponent({
            type: 'string',
            setting: 'hamcq-filter.aliyun-content-check.access_sec',
            label: 'ALIBABA_CLOUD_ACCESS_KEY_SECRET',
          }),
          this.buildSettingComponent({
            type: 'string',
            setting: 'hamcq-filter.aliyun-content-check.skip_label',
            label: 'SKIP_LABEL',
            help: 'like ad,nonsense ......',
          }),
          m('hr'),
          this.submitButton(),
        ]),
      ]),
    ]);
  }
}

app.initializers.add('xlt-filter-pro', () => {
  app.extensionData
    .for('xlt-filter-pro')
    .registerPage(FilterSettingsPage)
    .registerPermission(
      {
        icon: 'fas fa-user-ninja',
        label: app.translator.trans('fof-filter.admin.permission.bypass_filter_label'),
        permission: 'discussion.bypassFoFFilter',
      },
      'reply'
    );
});

