export default {
  functional: true,
  // props: {
  //   to: {
  //     type: String,
  //     required: true,
  //   },
  //   tag: {
  //     type: String,
  //     default: "a",
  //   },
  // },
  render(h, ctx) {
    return h(
      ctx.props.tag,
      {
        attrs: {
          href: "#" + ctx.props.to,
        },
      },
      ctx.scopedSlots.default()
    );
  },
};
