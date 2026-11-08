Access Modifiers in TypeScript OOP

Access modifiers in TypeScript control who can access class properties and methods. They help protect data and keep code organized.

There are four commonly used modifiers:

public: Accessible from anywhere. It is the default modifier.

private: Accessible only inside the declaring class.

protected: Accessible inside the class and its child classes.

readonly: Can be assigned only during declaration or inside the constructor.

Example:

class BankAccount {
  public readonly id: string;
  private balance: number;
  protected holder: string;

  constructor(id: string, balance: number, holder: string) {
    this.id = id;
    this.balance = balance;
    this.holder = holder;
  }

  public deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }
}

Here, id cannot be changed, balance is private, and child classes can access holder. The deposit() method is available from anywhere.

In conclusion, access modifiers help achieve encapsulation by controlling data access and preventing unwanted changes.