// Disable Right-Click & Keyboard Shortcuts
document.addEventListener ('contextmenu', event => event.preventDefault ());
document.addEventListener ('keydown', event => {
  if (
    event.ctrlKey &&
    (event.key === 'u' ||
      event.key === 'U' ||
      event.key === 's' ||
      event.key === 'S' ||
      event.key === 'i' ||
      event.key === 'I' ||
      event.key === 'j' ||
      event.key === 'J' ||
      event.key === 'c' ||
      event.key === 'C')
  ) {
    event.preventDefault ();
  }
});

//Disable F12 (Developer Tools)
document.addEventListener ('keydown', event => {
  if (event.key === 'F12') {
    event.preventDefault ();
  }
});

// Detect Developer Tools Open
setInterval (() => {
  if (
    window.outerHeight - window.innerHeight > 200 ||
    window.outerWidth - window.innerWidth > 200
  ) {
    document.body.innerHTML = "<h1>Don't Inspect 😡</h1>";
  }
}, 500);
// feed,about me,project,contact me one page view another three pages are disappear
!(function () {
  const e = document.querySelector ('[data-tabs]'),
    a = e.querySelector ('ul'),
    i = (e.querySelectorAll ('span'), [...e.querySelectorAll ('[href]')]),
    l = document.querySelectorAll ('[data-tab-panel]'),
    s = (e.removeAttribute ('role'), a.setAttribute ('role', 'tablist'), (
      e,
      t
    ) => {
      t.focus (), t.removeAttribute (
        'tabindex'
      ), (t.dataset.tabActive = !0), t
        .querySelector ('span')
        .classList.add (
          'border-b-brand-stroke',
          'text-text-1'
        ), t.setAttribute ('aria-selected', 'true'), e.removeAttribute (
        'aria-selected'
      ), e.setAttribute ('tabindex', '-1'), e
        .querySelector ('span')
        .classList.remove (
          'border-b-brand-stroke',
          'text-text-1'
        ), (e.dataset.tabActive = !1);
      (t = i.indexOf (t)), (e = i.indexOf (e));
      (l[e].className = 'hidden'), (l[t].className = 'block');
    });

  i.forEach ((e, r) => {
    var t = 'true' === e.dataset.tabActive;
    e.setAttribute ('role', 'tab'), e.setAttribute ('id', 'tab' + (r + 1)), t ||
      e.setAttribute ('tabindex', '-1'), t &&
      e.setAttribute ('aria-selected', !0), e.parentNode.setAttribute (
      'role',
      'presentation'
    ), (e.href =
      '#' +
      e.getAttribute ('href').slice (1)), e.addEventListener ('click', e => {
      e.preventDefault ();
      var t = a.querySelector ('[aria-selected]');
      e.currentTarget !== t && s (t, e.currentTarget);
    }), e.addEventListener ('keydown', e => {
      var t = i.indexOf (e.currentTarget),
        t = 37 === e.which
          ? t - 1
          : 39 === e.which ? t + 1 : 40 === e.which ? 'down' : null;
      null !== t &&
        (e.preventDefault (), 'down' === t
          ? l[r].focus ()
          : i[t] && s (e.currentTarget, i[t]));
    });
  }), l.forEach ((e, t) => {
    e.setAttribute ('role', 'tabpanel'), e.setAttribute (
      'tabindex',
      '-1'
    ), e.getAttribute ('id'), e.setAttribute ('aria-labelledby', i[t].id);
  });
}) ();
