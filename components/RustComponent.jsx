import dynamic from "next/dynamic"

const RustComponent = dynamic({
    loader: async () => {
      const rustModule = await import("../static/number_adder.wasm");
      return props => <div>{rustModule.add_numbers(props.a, props.b)}</div>;
    }
  });

export default RustComponent