import Icon from "@/app/components/ui/Icons";
import Button from "../../components/ui/Button";
import { PageWrapper } from "../../components/ui/PageWrapper";

const OrderConfirmationPage = () => {
    return (
        <PageWrapper>
            <section className="py-16 antialiased">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-6 text-center">
                    <Icon type="check" size={86} />
                    <h1 className="lg:text-5xl text-4xl font-bold text-white/85">Order Confirmed!</h1>
                    <p className="text-lg text-white">
                        Thank you for your purchase. Your order has been placed successfully.
                    </p>
                    
                    <Button path="/" >
                        Back to Home
                    </Button>
                </div>
            </section>
        </PageWrapper>
    );
};

export default OrderConfirmationPage;
