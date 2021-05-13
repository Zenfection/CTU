import java.util.Set;

public class HoaDon{
    private int amount;
    private String invoiceCode;
    private ChiTiet items[];
    private Date invoiceDate;
    private KhachHang customer;

    //--Constructor 
    public HoaDon(){}
    public HoaDon(int amount,String invoiceCode,ChiTiet items[],Date invoiceDate, KhachHang customer){
        this.amount = amount;
        this.invoiceCode = invoiceCode;
        this.items = items;
        this.invoiceDate = invoiceDate;
        this.customer = customer;
    }

    //--Getter/Setter
    public int getAmount() {return amount;}
    public String getInvoiceCode() {return invoiceCode;}
    public ChiTiet[] getItems() {return items;}
    public Date getInvoiceDate() {return invoiceDate;}
    public KhachHang getCustomer() {return customer;}
    public void setAmount(int amount) {this.amount = amount;}
    public void setCustomer(KhachHang customer) {this.customer = customer;}
    public void setInvoiceCode(String invoiceCode) {this.invoiceCode = invoiceCode;}
    public void setItems(ChiTiet[] items) {this.items = items;}
    public void setInvoiceDate(Date invoiceDate) {this.invoiceDate = invoiceDate;}

    
}