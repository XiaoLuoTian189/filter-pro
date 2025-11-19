import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('xlt-filter-pro', () => {
  extend(CommentPost.prototype, 'flagReason', function (original, flag) {
    if (flag.type() === 'autoMod') {
      const reason = flag.reasonDetail();
      return [
        app.translator.trans('fof-filter.forum.flagger_name'),
        reason ? m('span', { className: 'Post-flagged-detail' }, reason) : '',
      ];
    }
    return original(flag);
  });
}, -20);

